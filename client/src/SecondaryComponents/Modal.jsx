import React from 'react'

function Modal({mod,modal}) {
  return (
    <div>
      <div className='h-[278px] lg:hidden bg-white mt-[65px] md:mt-[75px] absolute w-full transition-all duration-500 z-[]' style={{top: mod}}>

        <div className='text-[rgb(38,106,225)] bg-[rgb(219,229,246)] px-[25px] py-[13px] text-[18px] font-bold cursor-pointer tracking-wider '>Home</div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider'>About</div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>Loan Program</div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>Acceptance Payment</div>

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider relative whitespace-nowrap'
        onClick={() => setIsOpen((prev) => !prev)}>

        Page </div>
       

        <div className='text-[rgb(34,69,133)] text-[17px] font-bold px-[25px] py-[10px] hover:bg-[rgb(219,229,246)] hover:text-[rgb(84,137,230)] transition duration-[0.5s] cursor-pointer tracking-wider whitespace-nowrap'>Contact Us</div>

      </div>
    </div>
  )
}

export default Modal
