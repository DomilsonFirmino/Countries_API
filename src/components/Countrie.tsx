import { useNavigate} from "react-router-dom"
import { country } from "../@types/Types"

export const Countrie = ({Countries}:{Countries: country | null | undefined}) => {
    const navigate = useNavigate()
    return (
        <div className="shadowBig" onClick={()=>navigate(`/countrie?id=${Countries?.name.official}`)} style={{cursor: "pointer", border: "1px solid white",borderRadius: ".35rem", overflow:"hidden"}}>
            <div>
                <img style={img} src={Countries?.flags.png} alt={Countries?.name.official} />
            </div>
            <div style={{padding: "1rem", backgroundColor: "var(--white)"}}>
                <p style={{fontWeight: "bold"}}>{Countries?.name.official}</p>
                <p>Population: {Countries?.population}</p>
                <p>Countrie: {Countries?.region}</p>
                <p>Capital: {Countries?.capital}</p>
            </div>
        </div>
    )
}

const img = {
    aspectRatio: "2/1",
}