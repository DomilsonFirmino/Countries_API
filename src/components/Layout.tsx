import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
  return (
    <div style={{paddingBottom: "1rem"}}>
        <Header/> 
        <Outlet/>
    </div>
  )
}
