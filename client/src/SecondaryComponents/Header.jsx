import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import list from 'list.json';



function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <div className='h-[50px] grid grid-cols-[70%,30%] md:grid md:grid-cols-2 lg:h-[90px] lg:grid lg:grid-cols-[30%,70%]'>
             <div className='bg-[white] h-[70px] md:h-[100px] lg:h-[120px]'>

              <h2 className='text-[20px] md:text-[25px] lg:text-[29px] font-bold text-[rgb(35,37,111)] mt-[15px] md:mt-[19px] lg:mt-[27px] ml-[10px] md:ml-[15px] lg:ml-[65px]'><FontAwesomeIcon icon={faLandmark} className='text-[40px] md:text-[50px]' /> Bitxbase Loan</h2>

             </div>

             <div className='bg-[white] flex justify-center items-center gap-[10px] ml-[35px]'>

               <div className='text-[rgb(38,106,225)] text-[15px] font-bold cursor-pointer tracking-wider'>Home</div>

               <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>About</div>

               <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>Loan Program</div>

               <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>Acceptance Payment</div>

               <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider relative'
                onClick={() => setIsOpen((prev) => !prev)}>
                
                Page 
                  {!isOpen ? (
                    <FontAwesomeIcon icon={faCaretDown} className='ml-[5px]' />
                  ): (
                    <FontAwesomeIcon icon={faCaretUp} className='ml-[5px]' />
                  )} 
                </div>
                {isOpen && (
                  <div className='absolute bg-black'>
                    {list.map((item, i) => (
                      <div key={i}>
                        <h3>{item.pages}</h3>
                      </div>
                    ))}
                  </div>
                )}
               
               <div className='text-[rgb(34,69,133)] text-[15px] font-bold px-[25px] py-[13px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>Contact Us</div>
             </div>
      </div>

    </div>
  )
}

export default Header
