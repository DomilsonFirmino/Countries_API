import { useCountrysContext } from "./Context/CountrysContext";
import {  useThemeContext } from "./Context/ThemeContext"

export default function App() {
  
  const {theme, setTheme } = useThemeContext()
  const {isLoading, status, error,countrys} = useCountrysContext()
  const TotalCountrys = Math.round(countrys.length / 20 )

  const handleOnClick = () => {
    setTheme?.(theme == "dark" ? "light" : "dark")
  };
  return (
    <>
      <p>{theme}</p>
      <button onClick={handleOnClick}>Aqui</button>
      {isLoading && <p>...isLoading</p> }
      {status == "error" && <p>{error}</p> }
      {status == "ready"}

      <div>
        {countrys.map((value,index)=> ( index < 20 ? <p key={index}>{value.cca2}</p> :""))}
      </div>

      
      <div style={{display: "flex"}}>
        {Array.from({length: TotalCountrys}, (_, i) => i + 1).map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
    </>
  )
}
