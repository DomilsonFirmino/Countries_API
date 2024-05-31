import { country } from "../../@types/Types"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from "../../assets/ml.png"
import { useNavigate } from "react-router-dom";

export const Countrie = ({country}:{country: country}) => {

    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`countrie?id=${country.name.official}`)} style={{cursor: "pointer"}}>
            <div>
                <LazyLoadImage style={{ aspectRatio: "18/11"}} src={country.flags.png} alt={country.name.official} effect="blur" placeholderSrc={PlaceholderImage} width="100%"/>
            </div>
            <div>
                <p><span style={{fontWeight: "bold"}}>Name: </span>{country.name.official}</p>
                <p><span style={{fontWeight: "bold"}}>Population: </span>{country.population}</p>
                <p><span style={{fontWeight: "bold"}}>Region: </span>{country.region}</p>
                <p><span style={{fontWeight: "bold"}}>Capital: </span>{country.capital}</p>
            </div>
        </div>
    )

}