import { useState, useEffect } from 'react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context-api/index'
import { Pagination } from '../Pagination/index'
import { getCharacter } from '../../services/service'
import { SearchCharacter } from '../SearchCharacter/index'
import styled from 'styled-components'
import Logo from '../images/Rick-And-Morty-Logo.png'

async function Show(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const json = await response.json()
    console.log(json)
}
Show()

export const ListCharacter = () => {
    const {theme} = useContext(ThemeContext)
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, prevNextPageUrl] = useState()
    const [pages, setPages] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState(null)

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

    const searchCharacter = async (name) => {
        setLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
        const data = await response.json();
        if(!data.results){
            setError("No characters found whit that name");
            setSearchResults([]);
        }
        else if(data.results.length === 0){
           setError("No characters found");
           setSearchResults([]);
        }else{
           setSearchResults(data.results)
        }
        setLoading(false);
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

    const ErrorMessage = ({ message }) => {
        return <div style={{ color: 'red' }}>{message}</div>;
      };

    if(loading) return "Loading..."
//
    return(
        <main style={{backgroundColor: theme.background}}>
            <ImgLogo src={Logo} alt=""/>
              <SearchCharacter onSearch={searchCharacter}/>
                <CardArea>
                    {  error ? (
                        <ErrorMessage message={error}/>
                    ) : searchResults && searchResults.length > 0 ? (
                            searchResults.map((char, index)=> {
                                return(
                                    <Card key={index} style={{backgroundColor: theme.Card, color: theme.fontColor}}>
                                        <CardImage src={char.image} alt=""/>
                                        <P><Span>name: </Span>{char.name}</P>
                                        <P><Span>species: </Span>{char.species}</P>
                                        <P><Span>status: </Span>{char.status}</P>
                                        <P><Span>type: </Span>{char.type === '' ? 'undefined' : char.type}</P>
                                    </Card>
                                )
                            })
                            ) : (
                            character.map((char, index)=> {
                                return(
                                    <Card key={index} style={{backgroundColor: theme.Card, color: theme.fontColor}}>
                                        <CardImage src={char.image} alt=""/>
                                        <P><Span>name: </Span>{char.name}</P>
                                        <P><Span>species: </Span>{char.species}</P>
                                        <P><Span>status: </Span>{char.status}</P>
                                        <P><Span>type: </Span>{char.type === '' ? 'undefined' : char.type}</P>
                                    </Card>
                                )
                            })
                        )
                    }
                </CardArea>
            <PaginationArea>
                <Pagination 
                nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages}
                />
            </PaginationArea>
        </main>
    )
}

const ImgLogo = styled.img`
    width: 400px;
    margin-left: 100px;
    @media (max-width: 768px) {
      width: 250px;
      margin: 0;
   }
`

const PaginationArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardArea = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`

const Card = styled.div`
   background-color: #3b3a30;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 350px;
   border-radius: 25px;
   margin: 10px;
   text-align: center;
   @media (max-width: 768px) {
    width: 250px
   }
`

const CardImage = styled.img`
   border-radius: 50%;
   width: 200px;
   margin-top: 15px;
   border: 5px solid #82b74b;
   @media (max-width: 768px) {
    width: 150px
   }
`

const P = styled.p`
   font-size: 18px;
   @media (max-width: 768px) {
    font-size: 15px
   }
`

const Span = styled.span`
   font-weight: bold;
   font-size: 20px;
   @media (max-width: 768px) {
    font-size: 18px
   }
`

//https://www.w3schools.com/colors/colors_palettes.asp