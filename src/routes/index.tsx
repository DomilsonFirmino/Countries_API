import { Routes, Route } from "react-router-dom"
import { ErrorPage } from "../Pages/ErrorPage"
import { Layout } from "../Components/Layout"
import { MainContent } from "../Pages/Countries"
import { SingleCountrie } from "../Components/SingleCountrie"

export const Rounting = () => {
  return (
    <Routes>
        <Route path="/Countries_API/" element={<Layout/>}>
          <Route index element={<MainContent/>} />
          <Route path='countrie' element={<SingleCountrie />}/>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
    </Routes>
  )
}
