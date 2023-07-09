import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context-api/index'

export const ThemeTogglerButton = ()=> {
    const { themes } = useContext(ThemeContext)
    
    function btnThemes(){
      console.log('themes: ThemeTogglerButton', themes)
    }

    return(
        <>
          <button onClick={btnThemes}>change theme</button>
        </>
    )
}