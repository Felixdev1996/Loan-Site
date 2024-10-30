import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='bg-blue-950 h-[1500px] p-5 lg:p-8 mt-96 grid grid-cols-1 md:grid-cols-4 lg:h-[400px] md:h-[750px] md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-5'>
        <div className=' md:col-span-full lg:col-auto md:mb-3 lg:mb-0'>
          <FontAwesomeIcon icon={faLandmark} className=' shadow-lg text-white mb-2 lg:mt-14 mt-8 text-9xl lg:text-9xl md:mt-14 md:text-[180px] ml-24 md:ml-72 lg:ml-20 lg:mb-3'/>
          <h1 className='font-bold text-3xl text-white lg:text-2xl md:text-6xl md:text-center text-center '>BIXBASE LOAN APP</h1></div>
        <div className=''><h1 className='mt-8 font-bold text-3xl md:text-xl text-white lg:text-3xl mb-3 ml-2 lg:mt-14'>ABOUT US</h1>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Our Company</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Our Mission</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Diversity</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Leadership</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Scholarship</section>
        </div>
        <div className=''><h1 className='mt-8 font-bold text-3xl md:text-xl lg:text-3xl text-white mb-3 ml-2 lg:mt-14'> FOR CONSUMER</h1>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Corporate Finance</section>
          <section className='text-white md:text-xl mb-3 ml-2'>✔ Investor Relations</section>
          <section className='text-white md:text-x5 text-xl mb-3 ml-2'>✔ Social Impact</section>
          <section className='text-white md:text-x5 text-xl mb-3 ml-2'>✔ Customers FAQS</section>
          <section className='text-white md:text-x1 text-xl mb-3 ml-2'>✔ Careers</section>
        </div>
        <div className=''><h1 className='mt-8 font-bold text-3xl md:text-xl text-white lg:text-3xl mb-3 ml-2 lg:mt-14'>INVESTOR</h1>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Financial Information</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Annual Report</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Proxy Statement</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ corporate Governance</section>
          <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ News and Social Media</section>
        </div>
        <div className=''><h1 className='mt-8 font-bold text-3xl md:text-xl text-white lg:text-3xl mb-3 ml-2 lg:mt-14'>Contact Us</h1>
        <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Terms</section>
        <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Privacy</section>
        <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Notice at Collection</section>
        <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Accesibility</section>
        <section className='text-white md:text-xl text-xl mb-3 ml-2'>✔ Site Feedback</section>
        </div> 
    </div>
  )
}

export default Footer
