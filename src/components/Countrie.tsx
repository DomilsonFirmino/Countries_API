import { useNavigate, useParams } from "react-router-dom"

export const Countrie = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={()=>navigate("/")}>go back</button>
            </div>
            <p>Countrie: {id}</p>
        </div>
    )
}
