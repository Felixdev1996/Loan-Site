import React, { useEffect, useState } from 'react'


function Home() {

  const images = [
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho08.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho07.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho09.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho06.png"
  ];

  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next");

      // Function to go to the next image
  const goToNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const goToPrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

    useEffect(() => {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }, []);
  
  
  return (
    <div>
      
      <div className='bg-blue-400 mt-0 md:mt-[30px] lg:mt-[50px] grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-2 relative'>
        <div className='bg-white'>
          <h1 className='text-[33px] md:text-[40px] lg:text-[50px] font-bold text-[rgb(35,37,111)] leading-[1.2] lg:leading-[1.3] ml-[10px] lg:ml-[70px] mt-0 md:mt-[150px]'>We Help Grow <br /> Your business</h1>
          <h4 className='text-[rgb(153,131,122)] w-1/1 md:w-1/2 leading-[1.2] lg:leading-[1.3] mt-[15px] ml-[10px] lg:ml-[70px]'>Thank you for choosing Bitxbase Loan for your financial needs. We’re here to make your loan application process easy, fast, and transparent.</h4>
          <button className='bg-white text-[#266AE1] text-[18px] tracking-wider py-[15px] px-[45px] border-2 border-[#266AE1] rounded-[8px] mt-[25px] md:mt-[40px]  ml-[10px] lg:ml-[70px] hover:bg-[#266AE1] hover:text-[white] transform hover:scale-110 transition-all duration-[0.5s]  '>Apply Now</button>
        </div>
        <div className='bg-[white] h-[750px] relative'>
          <img 
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          className={`w-[500px]  md:w-[550px] lg:w-[700px] h-[500px] md:h-[550px] lg:h-[650px] bg-cover bg-center absolute  right-[10px] top-0 lg:top-[-50px]
            ${
              direction === "next" ? "slide-in-left" : "slide-in-right"
            }
          `}/>
        </div>
      </div>

    </div>
  )
}

export default Home
