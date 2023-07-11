import  { useState } from 'react';
import styled from 'styled-components'

export const SearchCharacter = ({ onSearch })=> {
    const [searchCharacter, setSearchCharacter] = useState('')

    const handleInputChange = (event)=> {
        setSearchCharacter(event.target.value)
    }

    const handleSearch = ()=> {
        onSearch(searchCharacter)
    }

    return(
        <SearchArea>
          <Input type="text" value={searchCharacter} onChange={handleInputChange} placeholder="Search character by name"/>
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
`

const BtnSearch = styled.button`
   margin-left: 10px;
   padding: 10px;
   border-radius: 15px;
   font-weight: bold;
   color: #FFF;
   background-color: #B2DF28;
`
