import { useContext } from "react"
import { countrys } from "../contexts/CountrysContext"


export const ThemeSwitcher = () => {
    
    const theme = useContext(countrys)
  
    const handleChangeTheme = ()=>{
      theme?.dispatch({type: "CHANGETHEME"})
    }
    return (
        <button onClick={handleChangeTheme}>
            <div>{theme?.state.theme} mode</div>
        </button>
    )
}
