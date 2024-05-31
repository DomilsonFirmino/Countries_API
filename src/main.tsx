import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "./Context/ThemeContext.tsx"
import { CountrysProvider } from './Context/CountrysContext.tsx'
import {BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountrysProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CountrysProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
