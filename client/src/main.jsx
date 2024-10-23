import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import {BrowserRouter,Routes,Route} from 'BrowserRouter'
import Header from './UI/HomeComponents/Header'
=======
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
>>>>>>> 7d8f5c0427f122a09bdcac0418aada708f4d31dd


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
<<<<<<< HEAD
    <Header/>
      <Routes>
        
        <Route/>

      </Routes>
=======

    <Routes>
      <Header/>
      <Route/>
    </Routes>
>>>>>>> 7d8f5c0427f122a09bdcac0418aada708f4d31dd
    </BrowserRouter>
  </StrictMode>,
)
