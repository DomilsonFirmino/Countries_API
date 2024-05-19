import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Filters } from "./Filters"

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Filters/>
        <p>Eu sou o layout</p>
        <Outlet/>
    </div>
  )
}
