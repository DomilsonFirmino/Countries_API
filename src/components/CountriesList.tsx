import { useContext } from "react"
import { countrys } from "../contexts/CountrysContext"
import { Error } from "./Error"
import { Countrie } from "./Countrie"
import { country } from "../@types/Types"

export const CountriesList = () => {
    
    const countries = useContext(countrys)
    const state = countries?.state
    function CheckObject(x: country | null | undefined): boolean{
        if (typeof x === 'object' && !Array.isArray(x) && x !== null) {
            return true
        }
        return false
    }
    return (
        <>
            {state?.status == "Loading" && <p>Carregando</p>}
            
            {
                <>
                    <button onClick={()=>countries?.dispatch({type:"FILTERREG",payload:"Europe"})}>FiltrarAsia</button>
                    <button onClick={()=>countries?.dispatch({type:"FILTERREG", payload: "none"})}>RemoverFiltro</button>
                </>
            }
            {
            (state?.error !== "" && state?.status=="Ready")
                ?<Error erro={state?.error}></Error>
                :<ul>
                    {
                        Array.isArray(state?.Filtered) ? state?.Filtered.map((count,id)=> (
                            <Countrie key={id} Countries={count}></Countrie>
                        )): CheckObject(state?.Filtered) && <Countrie key={1000} Countries={state?.Filtered}></Countrie>
                    }
                </ul>
            }
        </>
    )
}
