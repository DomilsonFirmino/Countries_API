import { CountryList } from "./Components/CountryList";
import { useCountrysContext } from "./Context/CountrysContext";
import {  useThemeContext } from "./Context/ThemeContext"

export default function App() {
  
  const {theme, setTheme } = useThemeContext()
  const {isLoading, status, error,countrys} = useCountrysContext()

  const handleOnClick = () => {
    setTheme?.(theme == "dark" ? "light" : "dark")
  };
  return (
    <>
      <p>{theme}</p>
      <button onClick={handleOnClick}>Aqui</button>
      {isLoading && <p>...isLoading</p> }
      {status == "error" && <p>{error}</p> }
      {status == "ready" && <CountryList countrys={countrys} /> }
    </>
  )
}
