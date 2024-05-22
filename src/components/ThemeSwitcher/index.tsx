import { useContext } from "react"
import { countrys } from "../../contexts/CountrysContext"
import stlyes from "./ThemeSwitcher.module.css"

export const ThemeSwitcher = () => {
    
    const theme = useContext(countrys)
  
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
