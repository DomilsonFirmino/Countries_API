import { ThemeSwitcher } from "../ThemeSwitcher"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={`${styles.header} Element`}>
      <div className={`${styles.headerContainer} container`}>
        <h1>Where in the World</h1>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </div>
  )
}
