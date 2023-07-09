import { createContext } from 'react'

export const themes = {
    backGrounDark: {
        background: '#3b3a30',
        color: '#eeeeee'
    },
    backGroundLight: {
        background: '#f0f0f0',
        color: '#000000'
    },
    cardDark: {
        background: '#3b3a30',
        color: '#eeeeee'
    },
    cardLight: {
        background: '#f0f0f0',
        color: '#000000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props)=> {
    return(
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}