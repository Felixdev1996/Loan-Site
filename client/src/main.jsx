import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Slide from './Slide'
// import Header from './Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slide/>
    {/* <Header/> */}
  </StrictMode>,
)
