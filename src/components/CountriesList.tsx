import { useContext } from "react"
import { countrys } from "../contexts/CountrysContext"
import { Error } from "./Error"
import { Countrie } from "./Countrie"
import CheckObject from "../utils/Functions"

    
export const CountriesList = () => {
    
    const countries = useContext(countrys)
    const state = countries?.state
    
    let empty = true
    
    if(Array.isArray(state?.Filtered))
        empty = state.Filtered.length == 0

    return (
        <div className="container">
            {state?.status == "Loading" && <p>Carregando</p>}
            {
            (state?.error !== "" && state?.status=="Ready")
                ?<Error erro={state?.error}></Error>
                :<ul style={styles}>
                    {
                        empty && state?.status == "Ready"?<p>Não encontramos nada</p>:Array.isArray(state?.Filtered) ? state?.Filtered.map((count,id)=> (
                            <Countrie key={id} Countries={count}></Countrie>
                        )): CheckObject(state?.Filtered) && <Countrie key={1000} Countries={state?.Filtered}></Countrie>
                    }
                </ul>
            }
        </div>
    )
}


const styles = {
    padding: "2rem 0rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
    gridGap: "2rem"
}