import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/Main'
import { Layout } from './components/Layout'
import { CountrysContext } from './contexts/CountrysContext'
import { SingleCountrie } from './components/SingleCountrie'
import { NFound } from './components/NFound'
function App() {
  return (
    <>
    <CountrysContext>
        <Routes>
          <Route path='*' element={<NFound/>}/>
          <Route path='/Countries_API' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='countrie' element={<SingleCountrie/>}/>
          </Route>
        </Routes>
      </CountrysContext>
    </>
  )
}

export default App
