import { useContext, useEffect } from "react"
import { countrys } from "../../contexts/CountrysContext"
import stlyes from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = () => {
    
    const theme = useContext(countrys)
  
    useEffect(()=>{
        const StoredTheme = localStorage.getItem("THEME")
        if(StoredTheme !== null && (StoredTheme == "light" || StoredTheme == "dark") )
            theme?.dispatch({type: "THEME",payload: StoredTheme})
        else if(theme?.state.theme)
            localStorage.setItem("THEME",theme?.state.theme)
    },[])
    const handleChangeTheme = ()=>{
      theme?.dispatch({type: "CHANGETHEME"})
    }
    return (
        <div >
            <button className={stlyes.button} onClick={handleChangeTheme}>
                <div>icon</div>
                <div>{theme?.state.theme} mode</div>
            </button>
        </div>
    )
}
