import { useState, useEffect } from 'react'
import { Pagination } from '../Pagination/index'
import { getCharacter } from '../../services/service'
import styled from 'styled-components'
import Logo from '../images/Rick-And-Morty-Logo.png'

async function Show(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const json = await response.json()
    console.log(json)
}
Show()


export const ListCharacter = () => {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, prevNextPageUrl] = useState()
    const [pages, setPages] = useState()

    useEffect(()=> {
        setLoading(true)
        const FetchData = async ()=> {
            const data = await getCharacter()
            setCharacter(data.results)
            setLoading(false)
            setNextPageUrl(data.info.next)
            prevNextPageUrl(data.info.prev)
            setPages(data.info.pages)
        }
        FetchData()
    }, [])

    const fetchPage = async (url)=> {
        const response = await fetch(url)
        const data = await response.json()
        setCharacter(data.results)
        setNextPageUrl(data.info.next)
        prevNextPageUrl(data.info.prev)
        setPages(data.info.pages)
    }

    function nextPage(){
        fetchPage(nextPageUrl)
    }

    function prevPage(){
        fetchPage(prevPageUrl)
    }

    function goToPage(page){
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        fetchPage(url);
    }

    

    if(loading) return "Loading..."

    return(
        <>
        <ImgLogo src={Logo} alt=""/>
        {
            character.map((char, index)=> {
                return(
                    <div key={index}>
                        <img src={char.image} alt=""/> 
                        <p>name: {char.name}</p>
                        <p>species:{char.species}</p>
                        <p>status:{char.status}</p>
                        <p>type:{char.type}</p>
                    </div>
                )
            })
        }
        <PaginationArea>
            <Pagination 
            nextPage={nextPageUrl ? nextPage : null}
            prevPage={prevPageUrl ? prevPage : null}
            goToPage={goToPage}
            pages={pages}
            />
        </PaginationArea>
        </>
    )
}

const ImgLogo = styled.img`
    width: 400px;
`

const PaginationArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/*   
*/