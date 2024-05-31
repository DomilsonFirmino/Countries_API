import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div>
      <p>Essa pagina não existe</p>
      <Link to="/">Voltar a pagina principal</Link>
    </div>
  )
}
