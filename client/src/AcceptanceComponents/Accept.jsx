import React, { useState } from 'react'


import loan4 from './loan4.jpg'
// import loan5 from './loan5.jpg'


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
      setMove('120px')
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
            <h1 className='font-bold text-2xl pt-3 ml-3'>OUR ACCEPTANCE PAYMENT PAGE</h1>
          </section>
          <section className=''>
            <img className='h-full w-full ' src={loan4} />
          </section>
        </div>

        <div className='hidden lg:block md:block mb-20'>
        <div className='h-[570px] gap-2 p-4 md:grid-cols-2 grid lg:grid-cols-2'>
          <section className='bg-orange-400 loo'>
          <button className='w-[300px] font-bold text-3xl p-2 bg-white md:mt-[505px] lg:mt-[505px] hover:scale-90 transition-all duration-700'>Select Method</button>
          </section>

          <section className=''>
            <h1 className='font-bold lg:text-4xl text-xl md:text-2xl mb-2 pt-12 text-center'>HOW TO MAKE YOUR CREDIT ACCEPTANCE PAYMENT</h1>
            <p className=' p-3 text-justify font-semibold text-xl md:text-3xl lg:text-2xl'>To make a Credit Acceptance payment, simply click the option below, Once your payment is submitted, you should receive a confirmation. For added convenience, consider setting up automatic payments to ensure timely payments every month.</p>
          </section>
        </div>
        </div>

        <div className='block md:hidden lg:hidden mb-20'>
          <div className='mb-1'>
          <section className='border-blue-500 border-2 p-2'>
            <h1 className='font-bold lg:text-4xl text-xl md:text-2xl ml-3 mb-2 pt-5 text-center'>HOW TO MAKE YOUR CREDIT ACCEPTANCE PAYMENT</h1>
            <p className=' font-semibold text-center text-xl'>To make a Credit Acceptance payment, simply click the option below, Once your payment is submitted, you should receive a confirmation. For added convenience, consider setting up automatic payments to ensure timely payments every month.</p>
          </section>
        </div>

        <div className=''>
          <section className='bg-orange-400  loo'>
          <button className='w-[190px] mt-[330px] p-3 font-semibold bg-white text-2xl hover:scale-125 transition-all duration-700'>Select Method</button>
          </section>
          </div>
        </div>

        <div className=' h-[300px] mb-[620px] md:mb-[265px] lg:mb-5 p-3 gap-4 ml-3 mr-3 mt-2 md:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <section className='bg-white border-blue-400 border-2 hover:bg-blue-300 hover:-mt-3 transition-all duration-700  rounded-lg '>
            <img className='w-[40%] h-[60%] md:w-[50%] md:h-[60%] ml-2 hover:scale-75 transition-all duration-700' src={onlinepay}/>
            <h1 className='font-bold text-center text-2xl mt-12 md:mt-10'>Online Automatic Payments</h1>
          </section>
          <section className='bg-white border-blue-400 border-2 hover:bg-blue-300 hover:-mt-3 transition-all duration-700   rounded-lg'>
            <img className='w-[40%] h-[60%] md:w-[50%] md:h-[60%] ml-2 hover:scale-75 transition-all duration-700' src={mailpay} />
            <h1 className='font-bold text-center text-2xl mt-10 md:mt-14'>Mail Credit Program</h1>
          </section>
          <section className='bg-white border-blue-400 border-2 hover:bg-blue-300 hover:-mt-3 transition-all duration-700   rounded-lg'>
            <img className='w-[40%] h-[60%] md:w-[40%] md:h-[50%] ml-2 hover:scale-75 transition-all duration-700' src={personpay}/>
            <h1 className='font-bold text-center text-2xl mt-10 md:mt-20'>In Person In time delivery</h1>
          </section>
          <section className='bg-white border-blue-400 border-2 hover:bg-blue-300 hover:-mt-3 transition-all duration-700   rounded-lg'>
            <img className='w-[40%] h-[60%] md:w-[40%] md:h-[50%] ml-2 hover:scale-75 transition-all duration-700' src={phonepay}/>
            <h1 className='font-bold text-center text-2xl mt-10 md:mt-16'>Phone Automatic Payments</h1>
          </section>
        </div>

        <main className='mt-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%,30%] lg:gap-4'>
          <section className=''>
            <h1 className='lg:pt-16 pt-8 ml-5 md:ml-8 font-bold text-3xl md:text-2xl lg:text-3xl'>CREDIT Q&A</h1>
            <div className='h-[80px] bg-blue-200 mr-4 ml-3 mt-8'onClick={cc}>
              <h1 className='font-semibold md:font-bold text-blue-600 pt-5 text-xl md:text-2xl ml-4 mb-5'>CAN I GET A CREDIT ON LOAN?<span className='text-3xl ml-4 md:ml-[320px] lg:ml-[500px] lg:text-4xl'>{movePlus1}</span></h1>
            </div>
            <div className='h-[125px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:move}}>
              <h1 className='text-start md:text-xl lg:text-2xl p-1'>Yes, we offer loan options for individuals with varying credit backgrounds. While loan terms might differ for those with lower credit scores, we work to provide flexible solutions that match your needs.</h1>
            </div>

            <div className='h-[80px] bg-blue-200 mr-4 ml-3 mt-8'onClick={dd}>
              <h1 className='font-semibold text-blue-600 md:font-bold text-xl md:text-2xl lg:text-2xl ml-3 md:ml-4 md:pt-5 mb-5'>HOW IS MY INTEREST RATE DETERMINED?<span className='text-3xl ml-44 md:ml-[180px] lg:ml-[365px] lg:text-4xl'>{movePlus2}</span></h1>
            </div>
            <div className='h-[125px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:mover}}>
              <h1 className=' text-start md:text-xl lg:text-2xl p-1'>Your interest rate is determined based on factors such as your credit score, income, loan type, and term length. Higher credit scores generally result in lower interest rates, while lower scores may have higher rates to offset risk.</h1>
            </div>

            <div className='md:h-[80px] h-[65x] bg-blue-200 mr-4 ml-3 mt-10'onClick={aa}>
              <h1 className=' text-blue-600 md:font-bold text-xl md:text-xl lg:text-2xl ml-3 md:ml-4 md:pt-5 mb-5'>CAN I APPLY FOR A LOAN WITH A CO-SIGNER?<span className='text-3xl ml-[200px] md:ml-[230px] lg:ml-[320px] lg:text-4xl'>{movePlus3}</span></h1>
            </div>
            <div className='h-[130px] md:h-[105px] lg:h-[70px] bg-blue-100 mr-4 ml-3 mt-1 duration-1000 overflow-hidden' style={{height:moves}}>
              <h1 className='text-start md:text-xl lg:text-2xl p-1'>Yes, having a co-signer with a strong credit history can improve your chances of approval and may result in more favorable loan terms. If you’re unable to meet your loan obligations, your co-signer will be responsible for repayment.</h1>
            </div>

            <div className='h-[80px] md:h-[70px] lg:h-[80px] bg-blue-200 mr-4 ml-3 mt-8'onClick={bb}>
              <h1 className='font-semibold text-blue-600 md:font-bold text-xl md:text-xl lg:text-2xl ml-3 md:ml-4 md:pt-5 mb-5'>HOW DOES MY CREDIT SCORES AFFECT MY LOAN OPTIONS?<span className='text-3xl ml-10 md:ml-[80px] lg:ml-[145px] lg:text-4xl'>{movePlus4}</span></h1>
            </div>
            <div className='h-[120px] ml-3 md:h-[95px] lg:h-[60px] bg-blue-100 mr-4  mt-1 duration-1000 overflow-hidden' style={{height:movest}}>
              <h1 className=' text-start md:text-xl lg:text-2xl p-1'>Yes, we offer loan options for individuals with varying credit backgrounds. While loan terms might differ for those with lower credit scores, we work to provide flexible solutions that match your needs.</h1>
            </div>
          </section>
          
          <section className='p-3'>
            <button className='p-4 w-72 md:w-96 lg:w-80 md:p-6 md:text-3xl hover:scale-90 transition-all duration-700 rounded-lg text-white bg-blue-700 lg:mt-8 mb-5 md:gap-10 mt-5 ml-10 md:ml-44 lg:ml-1  pl-2 font-bold text-2xl'>Download PDF</button>
            <button className='p-4 w-72 md:w-96 lg:w-80 md:p-6 md:text-3xl hover:scale-90 transition-all duration-700 rounded-lg text-white bg-blue-700 mb-9 md:gap-10 mt-5 ml-10 md:ml-44 lg:ml-1  pl-2 font-bold text-2xl'>Credit Form</button>

            <div className='h-[250px] md:h-[258px] lg:h-[300px] rounded-lg md:ml-44 md:mr-44 lg:mr-3 lg:ml-3 bg-blue-500 ml-5 mr-5'>pics</div>
          </section>
        </main>


          <section className='bg-green-500'>

          </section>
        </div>
    // </div>
  )
}

export default Accept
