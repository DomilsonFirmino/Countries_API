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
 
    return (
        <div className={`container`}>
            <button onClick={()=>navigate(`/Countries_API/`)} className="Button back">Voltar</button>
            {((searchParams.get("id") === null || filter !== undefined) && filter?.length == 0 ) && <p>Aconteceu algum erro</p>}
            {
                filter !== undefined && filter.length > 0 && <div className={styles.cc}>
                    <div>
                        <img src={filter[0].flags.png} alt="" />
                    </div>
                    

                    <div className="flow--1">
                        <h2>{filter[0].name.official}</h2>

                        <div>
                            <p> <span>Native Name:</span> {returnArrayN(filter[0].name.nativeName)[1].common}</p>
                            <p> <span>Population:</span> {filter[0].population}</p>
                            <p> <span>Region:</span> {filter[0].region}</p>
                            <p> <span>Sub Region:</span> {filter[0].subregion}</p>
                            <p> <span>Capital:</span> {filter[0].capital[0]} </p>
                        </div>



                        <div>
                            <p> <span>Top Level Domain:</span> {filter[0].tld[0]} </p>
                            <div>
                                <span>currencies:</span> 
                                {returnArray(filter[0].currencies).map((value, index) => {
                                    return <p key={index}>{value[0]}</p>
                                })}
                            </div>
                            <div>
                                <span>Languagues:</span>
                                <div style={{display: "flex", gap: "1rem"}}>
                                    {
                                        returnArrayL(filter[0].languages).map((value,index) => {
                                            return [ <p key={index}> {value[0]} </p> ]
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        
                        <div >
                            <p style={{marginBottom: "1rem"}}><span>Border Countries:</span></p>
                            <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
                                {filter[0].borders?.map((border,index)=> (
                                    <p key={index} className="Button">{border}</p>
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