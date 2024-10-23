import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route/>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
