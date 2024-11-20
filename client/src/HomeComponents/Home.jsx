import React, { useEffect, useState } from 'react'
import Capture from './Capture.png';



function Home() {

  const images = [
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho08.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho07.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho09.png",
    "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho06.png"
  ];

  const imageUrl = "https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho010.png";
  
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
    <div className='bg-white'>
      
      <div className=' mt-0 md:mt-[30px] lg:mt-[50px] grid grid-cols-1 md:grid-cols-[50%,50%] lg:grid-cols-2 relative'>
        <div className='bg-white'>
          <h1 className='text-[33px] md:text-[40px] lg:text-[50px] font-bold text-[rgb(35,37,111)] leading-[1.2] lg:leading-[1.3] ml-[10px] lg:ml-[70px] mt-0 md:mt-[150px]'>We Help Grow <br /> Your business</h1>
          <h4 className='text-[rgb(153,131,122)] w-1/1 md:w-1/2 leading-[1.2] lg:leading-[1.3] mt-[15px] ml-[10px] lg:ml-[70px]'>Thank you for choosing Bitxbase Loan for your financial needs. We’re here to make your loan application process easy, fast, and transparent.</h4>

          <button className='bg-white text-[#266AE1] text-[18px] tracking-wider py-[15px] px-[45px] border-2 border-[#266AE1] rounded-[8px] mt-[25px] md:mt-[40px]  ml-[10px] lg:ml-[70px] hover:bg-[#266AE1] hover:text-[white] transform hover:scale-110 transition-all duration-[0.5s]  '>Apply Now</button>
        </div>
        <div className='bg-[white] h-[750px] relative'>
          <img 
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          className={`w-[500px]  md:w-[550px] lg:w-[700px] h-[500px] md:h-[550px] lg:h-[650px] bg-cover bg-center absolute  right-[10px] top-0 lg:top-[-50px] lg:right-[80px]
            ${
              direction === "next" ? "slide-in-left" : "slide-in-right"
            }
          `}/>
        </div>
      </div>

      <div className='bg-[rgb(38,106,225)] h-[350px] md:h-[180px] lg:h-[120px] w-full lg:w-[1250px] left-0 lg:left-[50px] rounded-[20px] relative bottom-[250px] md:bottom-[200px] lg:bottom-[150px] grid grid-cols-1 md:grid-cols-4'>

            <div className='grid grid-cols-[20%,80%] md:grid-cols-[35%,65%] lg:grid-cols-[25%,75%] h-full'>
              <div className='flex justify-center'>
                <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[50px] h-[50px] mt-[20px] md:mt-[30px] cursor-pointer'/>
              </div>
              <div className=''>
                <p className='text-[20px] font-bold text-white leading-[50px] mt-[10px] md:mt-[20px] cursor-pointer'>Loan up to</p>
                <p className='text-[15px] text-white w-full md:w-1/2 lg:w-full cursor-pointer'>80% and $500,000</p>  
              </div>
            </div>
            
            <div className='grid grid-cols-[20%,80%] md:grid-cols-[35%,65%] lg:grid-cols-[25%,75%] h-full'>
              <div className='flex justify-center'>
                  <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[50px] h-[50px] mt-[20px] md:mt-[30px] cursor-pointer'/>
                </div>
                <div className=''>
                  <p className='text-[20px] font-bold text-white leading-[50px] mt-[10px] md:mt-[20px] cursor-pointer'>Low Rates</p>
                  <p className='text-[15px] text-white w-full md:w-1/2 lg:w-full cursor-pointer'>Starting 9% 12-60 months </p>  
                </div>
            </div>
            
            
            <div className='grid grid-cols-[20%,80%] md:grid-cols-[35%,65%] lg:grid-cols-[25%,75%] h-full'>
              <div className='flex justify-center'>
                    <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[50px] h-[50px] mt-[20px] md:mt-[30px] cursor-pointer'/>
                  </div>
                  <div className=''>
                    <p className='text-[20px] font-bold text-white leading-[50px] md:leading-[30px] mt-[10px] md:mt-[30px] cursor-pointer'>Quick Approval</p>
                    <p className='text-[15px] text-white cursor-pointer'>1 - 2 days</p>  
                  </div>
            </div>
            <div className='grid grid-cols-[20%,80%] md:grid-cols-[35%,65%] lg:grid-cols-[25%,75%] h-full'>
              <div className='flex justify-center'>
                      <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc07.png" className='w-[50px] h-[50px] mt-[20px] md:mt-[30px] cursor-pointer'/>
                    </div>
                    <div className=''>
                      <p className='text-[20px] font-bold text-white leading-[50px] md:leading-[30px] mt-[10px] md:mt-[30px] cursor-pointer'>Online Funding</p>
                      <p className='text-[15px] text-white cursor-pointer'>Easy Process</p>  
                    </div>
            </div>
        
      </div>

      <div className='bg-white h-[1950px] md:h-[710px] lg:h-[700px] relative bottom-[90px] md:bottom-[60px] lg:bottom-[30px] grid grid-cols-1 md:grid-cols-[35%,65%] lg:grid-cols-[35%,65%]'>
        <div className='h-[570px] md:h-[709px] lg:h-[700px] bg-white'>
          <img src={imageUrl} className='h-650px md:h-[550px] lg:h-[700px] left-[-100px] lg:left-[-50px] md:left-[-120px] absolute'/>
        </div>
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[15px] pr-[40px] md:pr-[50px] lg:pr-[100px] pl-[15px] md:pl-0 h-[1500px] md:h-[710px] lg:h-[700px]'>

          <div className='bg-green-500 h-fit rounded-[10px] overflow-hidden hover:bg-[rgb(38,106,225)] mb-0'>
            <div className='grid place-items-center bg-gradient-to-b from-[rgb(64,129,255)] to-[rgb(126,178,255)] h-fit pb-[40px] transform hover:scale-110 transition-all duration-[1.5s] hover:bg-[rgb(38,106,225)] man'>
              <p className='w-[250px] md:w-[140px] lg:w-[250px] text-[rgb(21,63,139)] text-[20px] font-bold mt-[50px] tracking-wider leading-[25px] mr-[20px] lg:mr-[80px] hover:text-white transition-all duration-[1.5s] manboy'>Want a quote from this buisiness?</p>

              <button className='bg-[rgb(12,51,121)] text-white py-[10px] px-[25px] whitespace-normal mt-[20px] mr-[150px] md:mr-[40px] lg:mr-[200px] rounded-[10px]'>Get a Quote</button>
            </div>
          </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>
            
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc09.png" className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]' />

              <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Personal Loan</p>

              <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Quick and easy application process</p>
            
          </div>


          <div className='h-fit  bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc012.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Business Capital</p>

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Competitive interest rates</p>
          </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc011.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Business Loan</p>

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Flexible repayment terms</p>

           </div>


          <div className='h-fit bg-white rounded-[10px] border-[rgb(214,227,249)] border-solid border-[1px] hover:bg-gradient-to-b
           hover:from-[rgb(155,203,249)] hover:to-[rgb(239,246,255)] hover:border-b-[rgb(41,108,225)] hover:border-b-[2px] transition duration-[0.5s] mb-0'>

            <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc010.png"  className='w-[90px] md:w-[60px] lg:w-[70px] mt-[20px] ml-[25px] transform hover:scale-75 transition-all duration-[0.5s]'/>

            <p className='text-[rgb(38,106,225)] text-[20px] mt-[20px] ml-[25px]'>Investica Network</p>

            <p className='text-[rgb(186,141,139)] mt-[20px] ml-[25px] mb-[25px]'>Networking with like-minded professionals</p>

           </div>


          <div className='bg-green-500 h-fit rounded-[10px] overflow-hidden hover:bg-[rgb(38,106,225)] mb-0'>

            <div className='grid place-items-center bg-gradient-to-b from-[rgb(64,129,255)] to-[rgb(126,178,255)] h-fit pb-[40px] transform hover:scale-110 transition-all duration-[1.5s] hover:bg-[rgb(38,106,225)] man'>
              <p className='w-[250px] md:w-[140px] lg:w-[250px] text-[rgb(21,63,139)] text-[20px] font-bold mt-[50px] tracking-wider leading-[25px] mr-[20px] lg:mr-[80px] hover:text-white transition-all duration-[1.5s] manboy'>Need A Personal Loan?</p>

              <button className='bg-[rgb(12,51,121)] text-white py-[10px] px-[25px] whitespace-normal mt-[20px] mr-[150px] md:mr-[40px] lg:mr-[200px] rounded-[10px]'>Apply Now</button>
            </div>

           </div>

        </div>
      </div>

      <div className='bg-white h-fit grid grid-cols-1 lg:grid-cols-2 mt-[200px] md:mt-[130px] lg:mt-[200px]'>

            <div className='grid grid-cols-1 bg-white h-fit'>
              <div className='bg-white h-fit'>
                <p className='text-[rgb(147,150,154)] ml-[15px] lg:ml-[80px] mb-[15px]'>HOW IT WORKS</p>

                <p className='text-[rgb(12,51,121)] text-[25px] md:text-[30px] lg:text-[35px] font-semibold ml-[15px] lg:ml-[80px]'>Start Your Credit Approval</p>
              </div>


              <div className=' h-fit grid grid-cols-[30%,70%] md:grid-cols-2'>
                <div>
                  <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] mt-[40px] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>1</div>
                  <div className='bg-[rgb(38,106,225)] h-[90px] w-[3px] ml-[50px] md:ml-[80px] lg:ml-[130px]'></div>
                  <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>2</div>
                  <div className='bg-[rgb(38,106,225)] h-[90px] w-[3px] ml-[50px] md:ml-[80px] lg:ml-[130px]'></div>
                  <div className='bg-[rgb(236,243,253)] py-[10px] px-[30px] w-[85px] text-[rgb(62,128,255)] text-[40px] font-bold rounded-[50%] ml-[10px] md:ml-[40px] lg:ml-[90px] transform hover:scale-110 transition-all duration-[0.5s]'>3</div>

                </div>
                <div className='bg-white'>
                  <p className='text-[rgb(38,106,230)] text-[23px] mt-[40px] mb-[20px] tracking-wider'>Check for an offer</p>

                  <p className='text-[rgb(147,150,154)] '>No obligation and no hidden fees</p>

                  <p className='text-[rgb(38,106,230)] text-[23px] mt-[75px] mb-[20px] tracking-wider'>Quick application</p>

                  <p className='text-[rgb(147,150,154)]'>Easy-to-follow steps</p>

                  <p className='text-[rgb(38,106,230)] text-[23px] mt-[75px] mb-[20px] tracking-wider'>Get funded</p>

                  <p className='text-[rgb(147,150,154)]'>Personalized support throughout the process</p>
                </div>
              </div>
            </div>


            <div className='h-full bg-white'>
              <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/amecreho013-800x596.png" className='mt-[40px] lg:mt-[60px]'/>
            </div>
      </div>


      <div className='bg-[rgb(38,106,225)] h-[450px] md:h-[300px] lg:h-[270px] mt-[50px] lg:w-[90%] lg:ml-[70px] rounded-[10px] grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        <div>
          <p className='text-white text-[25px] md:text-[28px] lg:text-[30px] mt-[55px] lg:mt-[40px] ml-[45px]'>Are you in Business</p>

          <p className='text-white text-[19px] mt-[10px] ml-[45px]'>And looking for a fast business capital or Loan?</p>

          <button className='bg-[rgb(38,106,225)] text-white text-[18px] tracking-wider py-[15px] px-[45px] border-2 border-white rounded-[8px] mt-[25px] md:mt-[40px]  ml-[40px] hover:bg-[#266AE1] hover:text-[white] transform hover:scale-110 transition-all duration-[0.5s] '>Apply Now</button>
        </div>

        <div>
          <img src={Capture} className='mt-[85px] md:mt-[185px] lg:mt-[90px] '/>
        </div>
      </div>
      

      <div className='bg-green-500 h-[300px] mt-[140px] grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-white'>
          <img src="https://demo.strongtheme.com/americancredit/wp-content/uploads/sites/4/2021/06/ameioc023-800x461.png" className='w-[85%] ml-[30px] lg:ml-[50px]'/>
        </div>
        <div className='bg-white'>
          <p className='text-[rgb(12,51,121)] text-[25px] md:text-[30px] lg:text-[35px]'>Consumer Information</p>
          <p className='text-[rgb(122,122,161)]'>Useful consumer information about Credit Acceptance</p>

          <div className="lg:mt-[20px]">
            
            <div className="collapse collapse-plus   rounded-none mb-[10px] lg:w-[630px]">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="text-xl font-medium collapse-title text-[rgb(38,106,225)] bg-[rgb(224,235,255)]">Credit Acceptance offers indirect auto financing</div>
              <div className="collapse-content">
                <p className='bg-[rgb(249,249,249)]'>hello</p>
              </div>
            </div>
            
            <div className="collapse collapse-plus  rounded-none mb-[10px] lg:w-[630px]">
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-medium collapse-title text-[rgb(38,106,225)] bg-[rgb(224,235,255)]">Most contract terms are set by the dealership.</div>
              <div className="collapse-content">
                <p className='bg-[rgb(249,249,249)]'>hello</p>
              </div>
            </div>
            
            <div className="collapse collapse-plus  rounded-none mb-[10px] lg:w-[630px]">
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-medium collapse-title text-[rgb(38,106,225)] bg-[rgb(224,235,255)]">Participating Credit Acceptance dealerships</div>
              <div className="collapse-content">
              <p className='bg-[rgb(249,249,249)]'>hello</p>
             </div>
            </div>

            <div className="collapse collapse-plus  rounded-none mb-[10px] lg:w-[630px]">
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-medium collapse-title text-[rgb(38,106,225)] bg-[rgb(224,235,255)]">Nearly any vehicle works on the Credit Acceptance</div>
              <div className="collapse-content">
              <p className='bg-[rgb(249,249,249)]'>hello</p>
             </div>
            </div>
          </div>
        </div>
      </div>


      

    </div>
    
  )
}

export default Home
