import { useContext, useState } from "react"
import { countrys } from "../../contexts/CountrysContext"
import styles from "./Filters.module.css"
export const Filters = () => {

  const UserContext = useContext(countrys)
  const [value, setValue] = useState("none")
  const [search, setSearch] = useState("")
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    setValue(e.target.value)
    setSearch("")
    UserContext?.dispatch({type: "FILTER", payload: ""})
    UserContext?.dispatch({type:"FILTERREG", payload: e.target.value})
  }
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue("none")
    UserContext?.dispatch({type:"FILTERREG", payload: "none"})
    setSearch(e.target.value)
    UserContext?.dispatch({type: "FILTER", payload: e.target.value})
  }
  return (
    <div className={`${styles.container} container`}>
      <div>
        <input type="text" value={search} onChange={handleChangeSearch} name="query" placeholder="Search for a country" />          
      </div>
      <div>
        <select value={value} onChange={handleChange} id="countriesRegion" name="countriesRegion">
          <option value="none">Filter by region</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}
