import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/Main'
import { Layout } from './components/Layout'
import { Countrie } from './components/Countrie'
import { CountrysContext } from './contexts/CountrysContext'

function App() {
  return (
    <>
    <CountrysContext>
          <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Main/>}/>
              <Route path='/countrie/:id' element={<Countrie/>}/>
            </Route>
          </Routes>
      </CountrysContext>
    </>
  )
}

export default App
