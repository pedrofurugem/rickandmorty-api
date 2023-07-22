import  { useState, useEffect } from 'react';
import styled from 'styled-components'

export const SearchCharacter = ({ onSearch })=> {
    //const [searchCharacter, setSearchCharacter] = useState('')
    const [inputValue, setInputValue] = useState('')

    useEffect(()=> {
        const handleKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch()
            }
        };

        document.addEventListener('keydown', handleKeyPress)

        return ()=> {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    const handleInputChange = (event)=> {
        setInputValue(event.target.value)
    }

    const handleSearch = ()=> {
        onSearch(inputValue)  
    }

    return(
        <SearchArea>
          <Input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search character by name"/>
          <BtnSearch onClick={handleSearch}>Search</BtnSearch>
        </SearchArea>
    )
}

const SearchArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

const Input = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 15px;
    @media(max-width: 768px) {
      width: 200px;
      padding: 8px;
   }
`

const BtnSearch = styled.button`
   margin-left: 10px;
   padding: 10px;
   border-radius: 15px;
   font-weight: bold;
   color: #FFF;
   background-color: #B2DF28;
   @media(max-width: 768px) {
      padding: 8px;
   }
`
