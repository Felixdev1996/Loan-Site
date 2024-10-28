import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './SecondaryComponents/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
    <Header/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
