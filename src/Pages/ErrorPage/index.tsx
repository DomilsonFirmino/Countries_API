import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div style={{display: "grid", placeContent: "center", height: "100%", textAlign: "center"}}>
      <p style={{fontWeight: "800", fontSize: "10rem"}}>404</p>
      <div className="flow--1">
        <p>Essa pagina não existe</p>
        <Link to="/Countries_API/">Voltar a pagina principal</Link>
      </div>
    </div>
  )
}
