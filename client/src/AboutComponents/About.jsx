import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"



import loan3 from './loan3.jpg'

import team1 from './team1.jpg'
import team2 from './team2.jpg'
import team3 from './team3.jpg'
import team4 from './team4.jpg'
import team5 from './team5.jpg'
import team6 from './team6.jpg'






function About() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000, 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

        <> 

        <div className='mb-40 gap-1 h-[480px] md:h-[380px] lg:h-[370px] bg-blue-300 mt-10 grid grid-cols-1 md:grid-cols-2'>
            <section>
              <h1 className='pt-6 ml-4 font-bold text-xl mb-3 md:text-2xl lg:text-3xl text-white'>OUR ABOUT PAGE</h1>
              <h2 className='ml-1 mr-1 font-semibold text-justify md:text-xl lg:text-3xl text-black'>Welcome to Bitxbase Loan, where we make borrowing simple, secure, and tailored to your needs. We believe in empowering our clients with transparent, accessible loan options that help turn goals into reality. Whether you’re looking to finance a new home, start a business, or consolidate debt, our team is dedicated to finding the right solution for you.</h2>
            </section>
            <section>
              <img className='h-full w-[100%] lg:h-[78%] lg:w-full' src={loan3}/>
            </section>
        </div>

        <div className='h-[250px] md:h-[300px] lg:h-[100px] lg:mb-[600px] mb-40 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%,40%]'>
            <section className=''>
                <div className='p-2'>
                <Slider {...settings}>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team1} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team2} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team3} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team4} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team5} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  <div>
                    <img className='md:h-[150%] w-[150%] lg:h-[100%] lg:w-[100%] peer' src={team6} />
                    <button className='w-64 bg-slate-50 p-3 lg:text-3xl text-2xl peer-hover:bottom-2 absolute bottom-[-55px] font-bold transition-all duration-700'>OUR TEAM</button>
                  </div>
                  </Slider>
                </div>
            </section>
            <section className=''>
                <h1 className='font-semibold text-2xl pt-8 ml-2 md:text-4xl lg:text-5xl mb-8'>WHO WE ARE</h1>
                <h2 className='font-bold text-2xl md:text-4xl lg:text-4xl ml-3 text-[rgb(34,69,133)] mb-7'>Provide Excellent service</h2>
                <h2 className='ml-2 mr-2 font-bold text-justify text-xl md:text-2xl lg:text-3xl'>At BitxBase Loan Company, we pride ourselves on providing exceptional loan services tailored to meet the unique needs of each client. With a focus on transparency, flexibility, and personal support, we strive to make borrowing an empowering experience, not just a transaction. Our team of dedicated professionals brings years of industry expertise to the table, ensuring you receive top-quality guidance, competitive rates, and customized solutions.</h2>
            </section>
        </div>
        </>
  )
}

export default About
