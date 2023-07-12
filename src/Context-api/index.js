import React, { createContext, useState } from 'react'

export const themes = {
    dark: {
        background: '#3b3a30', 
        Card: '#e3e0cc',    
        fontColor: '#000000',          
    },
    light: {
        background: '#e3e0cc',
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