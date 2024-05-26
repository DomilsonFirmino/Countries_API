import { useNavigate} from "react-router-dom"
import { country } from "../@types/Types"

export const Countrie = ({Countries}:{Countries: country | null | undefined}) => {
    const navigate = useNavigate()
    return (
        <div className="shadowBig" onClick={()=>navigate(`/countrie?id=${Countries?.name.official}`)} style={{display: "flex", flexDirection:"column",cursor: "pointer", borderRadius: ".35rem", overflow:"hidden"}}>
            <div style={{flex: "1"}}>
                <img src={Countries?.flags.svg} alt={Countries?.name.official} />
            </div>
            <div style={{padding: "1rem", backgroundColor: "var(--Element)", flex: "1"}}>
                <p style={{fontWeight: "bold"}}>{Countries?.name.official}</p>
                <p><span style={{fontWeight: "bold"}}>Population: </span>{Countries?.population}</p>
                <p><span style={{fontWeight: "bold"}}>Region: </span>{Countries?.region}</p>
                <p><span style={{fontWeight: "bold"}}>Capital: </span>{Countries?.capital}</p>
            </div>
        </div>
    )
}