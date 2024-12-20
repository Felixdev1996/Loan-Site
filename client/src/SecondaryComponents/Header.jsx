import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCaretDown, faCaretUp, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import { Link } from 'react-router-dom';
// import About from '../AboutComponents/About';
// import Accept from '../AcceptanceComponents/Accept';
// import list from 'list.json';



function Header() {
    const [isOpen, setIsOpen] = useState(false)

    let [top, setTop] = useState("-100vh")

    function boy() {

      if (top== "-100vh") {
        setTop(0)
        
        
      } else {
        setTop("-100vh")
      }
    }

    // function hamburgerButton() {
      
    //   const betterWork = document.getElementById('man')
      
    
    //   if (betterWork.innerHTML === <FontAwesomeIcon icon={faBars} className='py-[px] px-[px]'/>) {
    //     <FontAwesomeIcon icon={faX} />
    //   } else {
    //     <FontAwesomeIcon icon={faBars} className='py-[px] px-[px]'/>
    //   }
    // }

  return (
    <div>
      {/* <Accept/> */}
      <div className='h-[70px] w-full grid grid-cols-[70%,30%] md:grid md:grid-cols-2 lg:h-[90px] lg:grid lg:grid-cols-[30%,70%,] relative z-10 bg-white'>
             <div className='bg-[white]  md:h-[px] lg:h-[120px]'>

              <h2 className='text-[20px] md:text-[25px] lg:text-[29px] font-bold text-[rgb(35,37,111)] mt-[15px] md:mt-[19px] lg:mt-[27px] ml-[10px] md:ml-[15px] lg:ml-[65px] cursor-pointer w-[185px] md:w-[230px] lg:w-[260px]'><FontAwesomeIcon icon={faLandmark} className='text-[40px] md:text-[50px] whitespace-nowrap' /> <Link to= '/'> Bitxbase Loan </Link></h2>

             </div>

              <div className="hidden lg:inline-block mt-[20px] lg:mt-[40px]">
              <div className='bg-[white] flex justify-center items-center gap-[10px] ml-[35px] '>

              <div className='text-[rgb(38,106,225)] text-[15px] font-bold cursor-pointer tracking-wider'>
                <Link to='/'>Home</Link></div>

              <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>
                <Link to='/about'>About</Link></div>

              <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>
                <Link to='/loan'>Loan Program</Link></div>

              <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>
                <Link to='/accept'>Acceptance Payment</Link></div>

              <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider relative whitespace-nowrap pagehover'
              onClick={() => setIsOpen((prev) => !prev)}>
              
              Page 
              {!isOpen ? (
                <FontAwesomeIcon icon={faCaretDown} className='ml-[5px]' />
              ): (
                <FontAwesomeIcon icon={faCaretUp} className='ml-[5px]' />

              )} 

                <div className='absolute bg-white left-[0px] top-[50px] leading-[3] w-[200px] duration-500 opacity-100   hover:opacity-100  showpage'>

                <ol>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap pagehover' >Personal Loans</li>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap'>Our Team</li>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap'>Career</li>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap'>Customer Reviews</li>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap'>FAQ</li>
                  <li className='text-[rgb(34,69,133)] text-[15px] font-bold hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider w-full px-[30px]  whitespace-nowrap'>Error 404</li>
                </ol>
                </div>
              
            </div>
          
            {/* {isOpen && (
              <div className='absolute bg-black'>
                {list.map((item, i) => (
                  <div key={i}>
                    <h3>{item.pages}</h3>
                  </div>
                ))}
              </div>
            )} */}

              <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>
                <Link to='/contact'>Contact Us</Link></div>


        </div>
              </div>
                    <button className='text-[27px] text-[rgb(35,37,111)] hover:text-[rgb(84,137,230)] lg:hidden  h-[40px] w-[40px] mt-[23px] md:mt-[32px] ml-[60px] md:ml-[320px] rounded-[3px] shadow ' onClick={boy}><FontAwesomeIcon icon={faBars}/></button>

                    
        </div>

         <Modal mod={top} modal={boy}/>   
      </div>
  )
}

export default Header
