import { useContext } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { countrys } from "../../contexts/CountrysContext"
import { returnArray, returnArrayL, returnArrayN} from "../../utils/Functions"
import styles from "./SingleCountrie.module.css"

export const SingleCountrie = () => {

    const [searchParams] = useSearchParams()
    const countries = useContext(countrys)

    const state = countries?.state
    const navigate = useNavigate()
    const filter = state?.Countries.filter(item => item.name.official === searchParams.get("id"))     

    if(filter !== undefined && filter !== null && filter.length != 0){
    /*
        returnArray(filter[0].currencies).map((value)=>(
            console.log(value[0])
            //valor na primeira posição console.log(value[1].name)
        ))

        returnArrayN(filter[0].name.nativeName).map((value)=>(
            //console.log(value[0])
            //valor na primeira posição 
            //console.log(value[1].common)
            console.log(value)
        ))
    */

    //console.log(returnArray(filter[0].currencies)[0][1])
    //console.log(returnArrayN(filter[0].name.nativeName)[0][1])
    //console.log(returnArrayN(filter[0].name.nativeName)[0][1])    
    console.log()
}

    return (
        <div className={`container`}>
            <button onClick={()=>navigate(`/`)}>Voltar</button>
            {((searchParams.get("id") === null || filter !== undefined) && filter?.length == 0 ) && <p>Aconteceu algum erro</p>}
            {
                filter !== undefined && filter.length > 0 && <div className={styles.cc}>
                    <div>
                        <img src={filter[0].flags.png} alt="" />
                    </div>
                    <div>
                        <h2>{filter[0].name.official}</h2>
                        <div>
                            <p> Native Name: {returnArrayN(filter[0].name.nativeName)[1].common}</p>
                            <p> Population: {filter[0].population}</p>
                            <p> Region: {filter[0].region}</p>
                            <p> Sub Region: {filter[0].subregion}</p>
                            <p> Capital: {filter[0].capital[0]} </p>
                        </div>
                        <div>
                            <p> Top Level Domain: {filter[0].tld[0]} </p>
                            <p>
                                currencies: {returnArray(filter[0].currencies).map((value,index)=>(
                                        value[index+1].name
                                    ))}
                            </p>
                            <div>Languagues:
                                <div style={{display: "flex", gap: "1rem"}}>
                                    {returnArrayL(filter[0].languages).map((value, index)=>(
                                        <p key={index}>{value[1]}</p>
                                    ))} 
                                </div>
                            </div>
                        </div>
                        
                        <div >
                            <p>Border Countries:</p>
                            <div style={{display: "flex", gap: "1rem"}}>
                                {filter[0].borders?.map((border,index)=> (
                                    <p key={index}>{border}</p>
                                ))}
                                {filter[0].borders === undefined && <p>Without borders</p> }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}