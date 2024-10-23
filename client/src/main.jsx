import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'BrowserRouter'
import Header from './SecondaryComponents/Header'


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
