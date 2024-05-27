import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";

export const NFound = () => {
    const navigate= useNavigate()
    return (
    <div style={{display: "grid",height: "100%",placeContent: "center"}}>
        <h1 style={{padding: "2rem"}}>404 - NOT FOUND</h1>
        <button className="Button" onClick={()=>navigate("/Countries_API/")}>
            <FaArrowLeft ></FaArrowLeft> voltar
        </button>
    </div>
  )
}
