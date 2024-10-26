import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
