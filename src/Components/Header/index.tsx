import { useThemeContext } from "../../Context/ThemeContext"
import styles from "./Header.module.css"

export const Header = () => {

    
    const {theme, setTheme } = useThemeContext()

    const handleChangeTheme = ()=>{
        const Tema = theme == "dark" ? "light": "dark"
        setTheme?.(Tema)
        localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY,Tema)
    }

    return (
        <div className={`${styles.header} Element`} style={{paddingBlock: "1rem"}}>
            <div className={`${styles.headerContainer} container`}>
                <h1>Where in the World</h1>
                <div >
                    <button onClick={handleChangeTheme}>
                        <div></div>
                        <div>{theme} mode</div>
                    </button>
                </div>
            </div>
        </div>
    )
}