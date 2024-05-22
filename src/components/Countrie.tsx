import { useNavigate, useParams } from "react-router-dom"
import { country } from "../@types/Types"

export const Countrie = ({Countries}:{Countries: country | null | undefined}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate("/")}>
            <img src={Countries?.flags.png} alt={Countries?.name.official} />
            <p>{Countries?.name.official}</p>
            <p>Countrie: {Countries?.region}</p>
        </div>
    )
}
