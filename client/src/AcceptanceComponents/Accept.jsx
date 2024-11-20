import React, { useState } from 'react'


// import loan4 from './loan4.jpg'
// import loan5 from './loan5.jpg'
import accept from './accept.jpg'
import loanbg from './loanbg.jpg'

import mailpay from './mailpay.png'
import onlinepay from './onlinepay.png'
import personpay from './personpay.png'
import phonepay from './phonepay.png'




function Accept() {

  let [move, setMove] = useState('0px')
  let [movePlus1,setMovePlus1] = useState("+")

  let [mover, setMover] = useState('0px')
  let [movePlus2,setMovePlus2] = useState("+")

  let [moves, setMoves] = useState('0px')
  let [movePlus3,setMovePlus3] = useState("+")

  let [movest, setMovest] = useState('0px')
  let [movePlus4,setMovePlus4] = useState("+")




  function cc() {
    if (move == '0px') {
      setMove('123px')
      setMoves('0px')
      setMovest('0px')
      setMover("0px")
      setMovePlus1("-")
      setMovePlus2('+')
      setMovePlus3('+')
      setMovePlus4('+')
    } else {
      setMove("0px")
      setMovePlus1("+")
    }
  }

  function dd() {
    if (mover == '0px') {
      setMover('120px')
      setMove('0px')
      setMovest('0px')
      setMove('0px')
      setMoves('0px')
      setMovePlus2('-')
      setMovePlus1("+")
      setMovePlus3('+')
      setMovePlus4('+')
    } else {
      setMover('0px')
      setMovePlus2('+')
    }
    
  }

  function aa() {
    if (moves == '0px') {
      setMoves('120px')
      setMove('0px')
      setMover('0px')
      setMovest('0px')
      setMovePlus3('-')
      setMovePlus2('+')
      setMovePlus1("+")
      setMovePlus4('+')
    } else {
      setMoves('0px')
      setMover('0px')
      setMovePlus3('+')
    }
  }

  function bb() {
    if (movest == '0px') {
      setMovest('120px')
      setMove('0px')
      setMover('0px')
      setMoves('0px')
      setMovePlus4('-')
      setMovePlus1("+")
      setMovePlus2('+')
      setMovePlus3('+')
    } else {
      setMovest('0px')
      setMoves('0px')
      setMovePlus4('+')
    }
  }

  
  // let [plus, setPlus] = useState("0")


  // function move() {
  //  if (mover==0) {
  //    setMove === '120px'
  //    move === '+'
  //    setMove === '-'
  //  } else {

  //       setMover(0)
  //       setPlus(0)

    
  //  }
    
  // }





  

  return (
    <div>
        <div className='h-[350px] gap-3 p-2 lg:p-2 mb-5 lg:mb-14 mt-3 grid md:grid-cols-2 lg:grid-cols-2'>
          <section className='rounded-lg'>
            <h1 className='font-bold text-2xl pt-7 ml-5'>OUR ACCEPTANCE PAYMENT PAGE</h1>
          </section>
          <section className=''>
            <img className='h-[90%] w-[100%]' src={accept} />
          </section>
        </div>

        <div className='hidden mt-6 lg:block md:block mb-20'>
        <div className='h-[570px] gap-2 p-4 md:grid-cols-2 grid lg:grid-cols-2'>
          <section className='bg-orange-400 relative loo'>
          <button className='w-[250px] absolute bottom-0 font-bold text-3xl p-2 bg-white md:mt-[600px] lg:mt-[505px] hover:scale-90 transition-all duration-700'>Select Method</button>
          </section>

          <section className=''>
            <h1 className='font-bold lg:text-2xl text-xl md:text-xl mb-2 pt-12 text-center'>HOW TO MAKE YOUR CREDIT ACCEPTANCE PAYMENT</h1>
            <p className=' p-3 text-justify font-semibold text-xl md:text-xl lg:text-2xl'>To make a Credit Acceptance payment, simply click the option below, Once your payment is submitted, you should receive a confirmation. For added convenience, consider setting up automatic payments to ensure timely payments every month.</p>
          </section>
        </div>
        </div>

        <div className='block md:hidden lg:hidden mb-20'>
          <div className='mb-1'>
          <section className='border-2 p-2'>
            <h1 className='font-bold ml-1 mb-2 pt-5 text-justify'>HOW TO MAKE YOUR CREDIT ACCEPTANCE PAYMENT</h1>
            <p className=' font-semibold text-justify'>To make a Credit Acceptance payment, simply click the option below, Once your payment is submitted, you should receive a confirmation. For added convenience, consider setting up automatic payments to ensure timely payments every month.</p>
          </section>
        </div>
        {/* w-[40%] h-[60%]  */}
        <div className=''>
          <section className='bg-orange-400  loo'>
          <button className='w-[190px] mt-[330px] p-3 font-semibold bg-white text-2xl hover:scale-90 transition-all duration-700'>Select Method</button>
          </section>
          </div>
        </div>

        <div className=' h-[300px]mb-[20px]  p-3 gap-4 ml-3 mr-3 mt-2 md:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc033.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Online Automatic Payments</p>
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc034.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Mail Credit Program</p>
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc035.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>In Person In time delivery</p>
          </div>

          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc036.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Phone Automatic Payments</p>
          </div>
        </div>

        <main className='mt-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%,30%] lg:gap-4'>
          <section className=''>
            <h1 className='lg:pt-16 pt-8 ml-5 md:ml-8 font-bold text-3xl md:text-2xl lg:text-3xl'>CREDIT Q&A</h1>
            <div className='h-[50px] md:h-[50px] lg:h-[50px] bg-blue-200 mr-4 ml-3 mt-8'onClick={cc}>
              <h1 className='font-semibold md:font-bold text-blue-600 pt-1 text-xl md:text-xl ml-4 mb-5'>CAN I GET A CREDIT ON LOAN?<span className='text-2xl ml-4 md:ml-[390px] lg:ml-[550px] lg:text-3xl'>{movePlus1}</span></h1>
            </div>
            <div className='h-[125px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:move}}>
              <h1 className='text-justify ml-1 mr-1 md:text-xl lg:text-2xl p-1'>Yes, we offer loan options for individuals with varying credit backgrounds. While loan terms might differ for those with lower credit scores, we work to provide flexible solutions that match your needs.</h1>
            </div>

            <div className='h-[60px] lg:h-[50px] md:h-[50px] bg-blue-200 mr-4 ml-3 mt-8'onClick={dd}>
              <h1 className='font-semibold text-blue-600 md:font-bold text-xl md:text-2xl lg:text-xl ml-3 md:ml-4 md:pt-1 mb-5'>HOW IS MY INTEREST RATE DETERMINED?<span className='text-2xl ml-44 md:ml-[190px] lg:ml-[440px] lg:text-3xl'>{movePlus2}</span></h1>
            </div>
            <div className='h-[125px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:mover}}>
              <h1 className=' text-justify ml-1 mr-1 md:text-xl lg:text-xl p-1'>Your interest rate is determined based on factors such as your credit score, income, loan type, and term length. Higher credit scores generally result in lower interest rates, while lower scores may have higher rates to offset risk.</h1>
            </div>

            <div className='md:h-[50px] lg:[50px] h-[60px] bg-blue-200 mr-4 ml-3 mt-10'onClick={aa}>
              <h1 className=' text-blue-600 font-semibold md:font-bold text-xl md:text-xl lg:text-xl ml-3 md:ml-4 md:pt-1 mb-5'>CAN I APPLY FOR A LOAN WITH A CO-SIGNER?<span className='text-2xl ml-[200px] md:ml-[240px] lg:ml-[410px] lg:text-3xl'>{movePlus3}</span></h1>
            </div>
            <div className='h-[130px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:moves}}>
              <h1 className='text-justify ml-1 mr-1 md:text-xl lg:text-2xl p-1'>Yes, having a co-signer with a strong credit history can improve your chances of approval and may result in more favorable loan terms. If you’re unable to meet your loan obligations, your co-signer will be responsible for repayment.</h1>
            </div>

            <div className='h-[60px] md:h-[50px] lg:h-[50px] bg-blue-200 mr-4 ml-3 mt-8'onClick={bb}>
              <h1 className='text-blue-600 font-semibold md:font-bold text-xl md:text-xl lg:text-xl ml-3 md:ml-4 md:pt-1 mb-5'>HOW DOES MY CREDIT SCORES AFFECT MY LOAN OPTIONS?<span className='text-2xl ml-10 md:ml-[95px] lg:ml-[260px] lg:text-3xl'>{movePlus4}</span></h1>
            </div>
            <div className='h-[120px] ml-3 md:h-[95px] lg:h-[60px] bg-blue-100 mr-4  mt-1 duration-1000 overflow-hidden' style={{height:movest}}>
              <h1 className=' text-justify ml-1 mr-1 md:text-xl lg:text-2xl p-1'>Yes, we offer loan options for individuals with varying credit backgrounds. While loan terms might differ for those with lower credit scores, we work to provide flexible solutions that match your needs.</h1>
            </div>
          </section>
          
          <section className='p-3 mt-7'>
            <button className='p-2 w-72 md:w-96 lg:w-80 md:p-3 md:text-xl hover:scale-90 transition-all duration-700 rounded-lg text-white bg-blue-700 lg:mt-8 mb-5 md:gap-10 mt-5 ml-10 md:ml-44 lg:ml-1  pl-2 text-2xl'>Download PDF</button>
            <button className='p-2 w-72 md:w-96 lg:w-80 md:p-3 md:text-xl hover:scale-90 transition-all duration-700 rounded-lg text-white bg-blue-700 mb-9 md:gap-10 mt-5 ml-10 md:ml-44 lg:ml-1  pl-2 text-2xl'>Credit Form</button>

            <div className='big hover:scale-90 transition-all duration-700 h-[250px] md:h-[258px] lg:h-[300px] rounded-lg md:ml-44 md:mr-44 lg:mr-3 lg:ml-3 bg-blue-500 ml-5 mr-5'>
              {/* <img className='h-full' src={loanbg}/> */}
            </div>
          </section>
        </main>


          <section className='bg-green-500'>

          </section>
        </div>
    // </div>
  )
}

export default Accept
