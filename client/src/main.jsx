import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './SecondaryComponents/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './SecondaryComponents/Footer'
import Home from './HomeComponents/Home'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'
import Loan from './LoanprogramComponents/Loan'
import Pages from './PageComponents/Pages'
import Accept from './AcceptanceComponents/Accept'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/accept' element={<Accept/>}/>



      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
