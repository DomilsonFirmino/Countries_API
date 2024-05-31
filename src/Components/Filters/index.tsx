import styles from "./Filters.module.css"

type Props = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
export const Filters = ({value, setValue, search, setSearch}: Props) => {

 
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    setValue(e.target.value)
    setSearch("")
  }
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue("none")
    setSearch(e.target.value)
  }

  return (
    <div  className={styles.container}>
      <div>
        <input type="text" value={search} onChange={handleChangeSearch} name="query" placeholder="Search for a country" />          
      </div>
      <div className={styles.values}>
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