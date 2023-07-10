import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../Context-api/index'

export const ThemeTogglerButton = ()=> {
    const { theme, setTheme } = useContext(ThemeContext)
    console.log('theme: ', theme)
    /*function btnThemes(){
      console.log('themes: ThemeTogglerButton', theme)
    }*/

    return(
        <>
          <button onClick={ ()=> setTheme(theme === themes.light ? themes.dark : themes.light)}>change theme</button>
        </>
    )
}