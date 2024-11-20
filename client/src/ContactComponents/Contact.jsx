import React from 'react'

import loan from './loan.jpg'

function Contact() {
  return (
    <>
    <div className='h-[600px] md:h-[300px] lg:h-[300px] mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <h1 className='ml-20 pt-24 font-bold text-xl'>PAGE CONTACT US</h1>
      <div className='bg-orange-400 lon'></div>
    </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mb-4'>
            <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc032.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[130px] md:ml-[150px] lg:ml-[130px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-center text-[20px] mt-[20px]'>PHONE</p>

              <p className='text-[rgb(186,141,139)] text-center mt-[20px] mb-[25px]'>(+234) 9031 450 3214</p>
            
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc031.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[130px] md:ml-[150px] lg:ml-[120px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-center text-[20px] mt-[20px]'>EMAIL</p>

              <p className='text-[rgb(186,141,139)] text-center mt-[20px] mb-[25px]'>bitxbaseloan23@gmail.com</p>
            
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc030.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[130px] md:ml-[150px] lg:ml-[120px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-center  text-[20px] mt-[20px]'>LOCATION</p>

              <p className='text-[rgb(186,141,139)]  text-center mt-[20px] mb-[25px]'>Not yet Found</p>
            
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc029.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[130px] md:ml-[150px] lg:ml-[120px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-center text-[20px] mt-[20px]'>FAQ'S</p>

              <p className='text-[rgb(186,141,139)] text-center mt-[20px] mb-[25px]'>Frequently Asked</p>
        
          </div>
          </div>

          <main className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
            <form className='p-3 grid'>
              <input className='p-3 mb-5 w-[365px] md:w-[740px] lg:w-[650px] mr-3 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="text" name="" id="" placeholder='Customer Account Number'/>
              <div className='flex gap-2 mb-5'>
              <input className='p-3 w-44 md:w-[370px] lg:w-80 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="text" name="" id="" placeholder='First Name' />
              <input className='p-3 w-44 md:w-[360px] lg:w-80 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="text" name="" id="" placeholder='Last Name'/>
            </div>
            <input className='p-3 mb-5 w-[365px] md:w-[740px] lg:w-[650px] mr-3 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="email" name="" id="" placeholder='Email'/>
            <input className='p-3 mb-5 w-[365px] md:w-[740px] lg:w-[650px] mr-3 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="text" name="" id="" placeholder='Customer Phone Number'/>
            <input className='p-3 mb-5 w-[365px] md:w-[740px] lg:w-[650px] mr-3 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none rounded-md' type="text" name="" id="" placeholder='Customer Address'/>
            <textarea className='p-4 mr-3 mb-7 text-[15px] focus:outline-none placeholder:text-slate-200 border-2 border-slate-200 bg-none' name="" id="" placeholder='Messages'></textarea>
            <button className='bg-blue-950 p-3 text-white mr-3 rounded-md'>SEND</button>
            </form>

            <div className=''>
                <h1 className='text-[20px] font-bold mb-4 text-blue-500 pt-3 ml-3'>CALL US</h1>
                <div className='h-[80px] rounded-md p-3 bg-slate-200 ml-3 mr-3 grid grid-cols-[20%,80%] mb-7'>
                    <img className='h-16' src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png"/>
                <div className=' md:-ml-20 lg:-ml-14'>
                  <h1 className='text-[16px] mb-3 text-blue-500'>Dealer's Support</h1>
                  <p className='text-[13px]'>(+234) 9045 566 4032</p>
                </div>
                </div>

                <div className='h-[80px] rounded-md p-3 bg-slate-200 ml-3 mr-3 grid grid-cols-[20%,80%] mb-7'>
                    <img className='h-16' src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png"/>
                <div className=' md:-ml-20 lg:-ml-14'>
                  <h1 className='text-[16px] mb-3 text-blue-500'>Customer Service</h1>
                  <p className='text-[13px]'>(+234) 9045 566 4032</p>
                </div>
                </div>

                <div className='h-[80px] rounded-md p-3 bg-slate-200 ml-3 mr-3 grid grid-cols-[20%,80%] mb-5'>
                    <img className='h-16' src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png"/>
                <div className=' md:-ml-20 lg:-ml-14'>
                  <h1 className='text-[16px] mb-3 text-blue-500'>Employement Inquires</h1>
                  <p className='text-[13px]'>(+234) 9045 566 4032</p>
                </div>
                </div>
                
                <h1 className='text-[20px] font-bold mb-2 text-blue-500 pt-5 ml-3'>CUSTOMER'S SERVICE HOUR</h1>
                <div className='h-[80px] rounded-md p-3 bg-slate-200 ml-3 mr-3 flex mb-7'>
                    <img className='h-16' src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png"/>
                  <h1 className='text-[16px] ml-3 mt-5 mb-3 text-blue-500'>Monday-Thursday</h1>
                  <p className='text-[16px] font-semibold ml-20 mt-5 lg:ml-80 md:ml-[430px] text-blue-500'>9am-9pm</p>        
                </div>
            </div>
          </main>
          </>
  )
}

export default Contact
