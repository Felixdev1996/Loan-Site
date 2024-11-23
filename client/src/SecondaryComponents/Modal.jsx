import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';



// import { useState } from 'react';

// import { Link } from 'react-router-dom';


function Modal({mod,modal}) {

  const [isOpen, setIsOpen] = useState(false)

    function dropDown() {
      const menu = document.getElementById('work')

      if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
      
    }


  return (
    <div>
      <div className=' h-[280px] lg:hidden bg-white mt-[70px] md:mt-[80px] absolute w-full transition-all duration-500 z-[4]' style={{top: mod}}>

        <div className='text-[rgb(38,106,225)] bg-[rgb(219,229,246)] px-[25px] py-[13px] text-[18px] font-bold cursor-pointer tracking-wider '>Home</div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>
          <Link to='/about'>About</Link></div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>
          <Link to='/loan'>Loan Program</Link></div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>
          <Link to='/accept'>Acceptance Payment</Link></div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider relative whitespace-nowrap peer '
        onClick={dropDown}>

        Page 
                <FontAwesomeIcon icon={faCaretDown} className='ml-[5px]' />

                <div className='absolute bg-white left-[0px] top-[45px] leading-[3] w-full transition-all duration-500 h-[270px] hidden z-10' id='work'>

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


       
       

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap w-full sticky bottom-[300px] '>
          <Link to='/contact'>Contact Us</Link></div>

      </div>
    </div>
  )
}

export default Modal
