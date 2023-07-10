import  { useState } from 'react';
//import styled from 'styled-components'

export const SearchCharacter = ({ onSearch })=> {
    const [searchCharacter, setSearchCharacter] = useState('')

    const handleInputChange = (event)=> {
        setSearchCharacter(event.target.value)
    }

    const handleSearch = ()=> {
        onSearch(searchCharacter)
    }

    return(
        <>
          <input type="text" value={searchCharacter} onChange={handleInputChange}/>
          <button onClick={handleSearch}>Search Character</button>
        </>
    )
}