import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "./Context/ThemeContext.tsx"
import { CountrysProvider } from './Context/CountrysContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountrysProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountrysProvider>
  </React.StrictMode>,
)
