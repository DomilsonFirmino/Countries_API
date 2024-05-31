import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from "../../assets/ml.png"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCountrysContext } from '../../Context/CountrysContext';
import styles from "./SingleCountrie.module.css"

export const SingleCountrie = () => {

    const {countrys} = useCountrysContext()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const country = countrys.find((item)=>item.name.official.toLowerCase() == searchParams.get("id")?.toLowerCase())
    return (
        <div className='container'>
            
            <button onClick={()=>navigate(`/Countries_API/`)} className="Button back">Voltar</button>
            <div className={`"flow--1" ${styles.cc}`} >
                <div>
                    <LazyLoadImage src={country?.flags.png} alt={country?.name.official} effect="blur" placeholderSrc={PlaceholderImage} width={"100%"}/>
                </div>
                
                <div className='flow--1'>
                    <div>
                        <p> <span style={{fontWeight: "bold"}}>Population:</span> {country?.population}</p>
                        <p> <span style={{fontWeight: "bold"}}>Region:</span> {country?.region}</p>
                        <p> <span style={{fontWeight: "bold"}}>Sub Region:</span> {country?.subregion}</p>
                        <p> <span style={{fontWeight: "bold"}}>Capital:</span> {Array.isArray(country?.capital) ? country?.capital[0] : country?.capital} </p>
                    </div>
                    
                    <div>
                        <p> <span>Top Level Domain:</span> {country?.tld[0]} </p>
                        <div>
                            <span>currencies:</span>
                        </div>
                        <div>
                            <span>Languagues:</span>
                            <div style={{display: "flex", gap: "1rem"}}>
                            </div>
                        </div>
                    </div>
                    
                    <div >
                        <p style={{marginBottom: "1rem"}}><span>Border Countries:</span></p>
                        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
                            {country?.borders?.map((border,index)=> (
                                <p key={index} className="Button">{border}</p>
                            ))}
                            {country?.borders === undefined && <p>Without borders</p> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
