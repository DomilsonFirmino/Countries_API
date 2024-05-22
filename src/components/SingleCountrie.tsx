import { useContext } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate} from "react-router-dom"
import { countrys } from "../contexts/CountrysContext"
import { returnKey } from "../utils/Functions"


export const SingleCountrie = () => {

    const [searchParams] = useSearchParams()
    const countries = useContext(countrys)

    const state = countries?.state
    const navigate = useNavigate()
    const filter = state?.Countries.filter(item => item.name.official === searchParams.get("id"))      

    return (
        <div>
            <button onClick={()=>navigate(`/`)}>Voltar</button>
            {((searchParams.get("id") === null || filter !== undefined) && filter?.length == 0 ) && <p>Aconteceu algum erro</p>}
            {
                filter !== undefined && filter.length > 0 && <div>
                    <img src={filter[0].flags.png} alt="" />
                    <p>{filter[0].region}</p>
                    <p>{filter[0].subregion}</p>
                    <p>{filter[0].name.nativeName[returnKey(filter)].common}</p>
                    <p>{filter[0].population}</p>
                </div>
            }
        </div>
    )
}