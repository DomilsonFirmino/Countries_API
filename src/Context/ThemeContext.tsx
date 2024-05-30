import React, { createContext, useContext, useState } from "react"
import { Theme } from "../@types/Types"


type Props = {
    theme: Theme,
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = createContext<Props>({theme: "dark", setTheme: ()=>{}})

export const ThemeProvider = ({children}:{children: React.ReactNode}) =>{

    const [theme, setTheme] = useState<Theme>("dark")

    return (
        <ThemeContext.Provider value={{
            theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () =>  useContext(ThemeContext);