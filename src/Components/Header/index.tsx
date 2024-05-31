import { useThemeContext } from "../../Context/ThemeContext"
import styles from "./Header.module.css"
import { MdDarkMode } from "react-icons/md"
import { MdOutlineWbSunny } from "react-icons/md";

export const Header = () => {

    
    const {theme, setTheme } = useThemeContext()

    const handleChangeTheme = ()=>{
        const Tema = theme == "dark" ? "light": "dark"
        setTheme?.(Tema)
        document.querySelector("body")?.setAttribute('data-theme', Tema)
        localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY,Tema)
    }

    return (
        <div className={`${styles.header} Element`} style={{paddingBlock: "1rem"}}>
            <div className={`${styles.headerContainer} container`}>
                <h1>Where in the World</h1>
                <div >
                    <button onClick={handleChangeTheme}>
                        <div></div>
                        <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                            {theme == "dark" ? <MdDarkMode  fontSize={"1.25rem"}></MdDarkMode> : <MdOutlineWbSunny fontSize={"1.25rem"}></MdOutlineWbSunny>} <p style={{fontSize: "1rem"}} >Mode</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}