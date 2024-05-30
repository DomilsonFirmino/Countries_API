import { country } from "../../@types/Types"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from "../../assets/ml.png"


export const Countrie = ({type,country}:{type: "list" | "single",country: country}) => {

    if( type == "list"){
        return (
            <div>
                <div>
                    <LazyLoadImage src={country.flags.png} alt={country.name.official} effect="blur" width={600} height={400} placeholderSrc={PlaceholderImage}/>
                </div>
                <div>
                    <p>{country.cca2}</p>
                    <p>{country.capital}</p>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <div>
                    <LazyLoadImage src={country.flags.png} alt={country.name.official} effect="blur" width={600} height={400} placeholderSrc={PlaceholderImage}/>
                </div>
                <div>
                    <p>{country.cca2}</p>
                    <p>{country.capital}</p>
                </div>
            </div>
        )
    }
  
   
}