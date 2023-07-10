import React, { createContext, useState } from 'react'

export const themes = {
    dark: {
        background: '#3b3a30', //escuro
        Card: '#f0f0f0',    
        fontColor: '#000000',      //claro      
    },
    light: {
        background: '#f0f0f0',
        Card: '#3b3a30', 
        fontColor: '#eeeeee'
    },
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props)=> {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}