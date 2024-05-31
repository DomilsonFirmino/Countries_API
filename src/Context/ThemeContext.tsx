import React, { createContext, useContext, useEffect, useState } from "react"
import { Theme } from "../@types/Types"


type Props = {
    theme: Theme,
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = createContext<Props>({theme: "dark", setTheme: ()=>{}})

export const ThemeProvider = ({children}:{children: React.ReactNode}) =>{

    const [theme, setTheme] = useState<Theme>("dark")
    useEffect(()=>{
       const ThemeAtual = (localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY))
       if(ThemeAtual == null){
            localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY,theme)
       }else{
        setTheme(ThemeAtual == "light" ? "light": "dark")
       }
    },[])

    return (
        <ThemeContext.Provider value={{
            theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () =>  useContext(ThemeContext);