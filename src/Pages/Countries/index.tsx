import { useState } from "react"
import { CountryList } from "../../Components/CountryList"
import { Filters } from "../../Components/Filters"
import { useCountrysContext } from "../../Context/CountrysContext"

export const MainContent = () => {
    const {countrys,error,isLoading,status} = useCountrysContext()
    const [value, setValue] = useState("none")
    const [search, setSearch] = useState("")
    return (
        <div className="container">
            <Filters value={value} setSearch={setSearch} search={search} setValue={setValue} />
            {isLoading && <p>...isLoading</p> }
            {status == "error" && <p>{error}</p> }
            {status == "ready" &&  (value != "none" ? <CountryList countrys={countrys} filterByRegion={value} />
                : search != "" ? <CountryList countrys={countrys} filterByName={search}/>
                : <CountryList countrys={countrys}/>
            )}
        </div>
    )
}
