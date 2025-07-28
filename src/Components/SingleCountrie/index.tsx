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
    console.log(country)
    return (
        <div className='container'>
            
            <button onClick={()=>navigate(`/Countries_API/`)} className="Button back">Voltar</button>
            <div className={`"flow--1" ${styles.cc}`} >
                <div>
                    {country?.flags && <LazyLoadImage src={country?.flags.png} alt={country?.flags?.alt} effect="blur" placeholderSrc={PlaceholderImage} width={"100%"}/> }
                </div>
                
                <div className='flow--2'>

                    <div className='flow--0'>
                        <p><span style={{fontWeight: "bold"}}>Name: </span>{country?.name.official}</p>
                        <p><span style={{fontWeight: "bold"}}>Population:</span> {country?.population}</p>
                        <p><span style={{fontWeight: "bold"}}>Region:</span> {country?.region}</p>
                        <p><span style={{fontWeight: "bold"}}>Sub Region:</span> {country?.subregion}</p>
                        <p><span style={{fontWeight: "bold"}}>Capital:</span> {Array.isArray(country?.capital) ? country?.capital[0] : country?.capital} </p>
                    </div>
                    
                    <div className='flow--0'>
                        {/* <p> <span>Top Level Domain:</span> {country?.tld[0]} </p> */}
                        <div className='flow--0'>
                            <p style={{fontWeight: "bold"}}>currencies:</p>
                            <div>
                            {country?.currencies !== undefined &&
                                Object.values(country?.currencies).map((value, index) => (
                                    <p key={index}>{value?.name?.toString()}</p>
                                ))
                            }
                            </div>
                        </div>
                        <div className='flow--0'>
                            <p style={{fontWeight: "bold"}}>Languagues:</p>
                            <div style={{display: "flex", gap: "1rem"}}>
                            {country?.languages !== undefined &&
                                Object.values(country?.languages).map((value, index) => (
                                    <p key={index}>{value?.toString()}</p>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    
                    <div className='flow--0'>
                        <p><span style={{fontWeight: "bold"}}>Border Countries:</span></p>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {country?.borders && country?.borders.length == 0 ? "Without Borders" : country?.borders?.map((border,index)=> (
                                <p key={index} className="Button">{border}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
