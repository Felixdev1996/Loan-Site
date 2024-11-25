import React, { useEffect, useRef, useState } from "react";

const ScrollCounters = () => {
  const [counts, setCounts] = useState([0, 0, 0]); // Initial counts for all divs
  const counterContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const animateCounters = (targets, duration) => {
      const startTime = performance.now();

      const updateCounters = () => {
        const currentTime = performance.now();
        const elapsedTime = Math.min((currentTime - startTime) / duration, 1);

        const updatedCounts = targets.map(({ start, end }) =>
          Math.floor(elapsedTime * (end - start) + start)
        );

        setCounts(updatedCounts);

        if (elapsedTime < 1) {
          requestAnimationFrame(updateCounters);
        }
      };

      requestAnimationFrame(updateCounters);
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters(
            [
              { start: 0, end: 1650},
              { start: 0, end: 70 },
              { start: 0, end: 2050 },
            ],
            2000 // Duration in milliseconds
          );
          if (observerRef.current) observerRef.current.disconnect(); // Trigger only once
        }
      });
    };

    const observerOptions = {
      threshold: 0.5, // Trigger when 50% visible
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    if (counterContainerRef.current) {
      observerRef.current.observe(counterContainerRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <div
        ref={counterContainerRef}
        className='grid grid-cols-1 bg-white h-fit md:grid-cols-3'
      >
        <div
          style={{
            fontSize: "",
            fontWeight: "",
            opacity: counts[0] > 0 ? 1 : 0,
            transform: counts[0] > 0 ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
          className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(220,235,252)] py-[30px] px-[110px] md:px-[60px] lg:px-[30px] lg:py-[25px] rounded-[10px] text-[45px] font-semibold'>
          {counts[0]}+
          <p className="text-[18px] font-normal tracking-wider">Loan Approval</p>
        </div>
        <div
          style={{
            fontSize: "",
            fontWeight: "",
            opacity: counts[1] > 0 ? 1 : 0,
            transform: counts[1] > 0 ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
          className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(179,217,252)] py-[30px] px-[110px] md:px-[60px] mt-[1px] md:mt-0 lg:px-[30px] lg:py-[25px] text-[45px] font-semibold'>
          {counts[1]}+
          <p className="text-[18px] font-normal tracking-wider">Investica Network</p>
        </div>
        <div
          style={{
            fontSize: "",
            fontWeight: "",
            opacity: counts[2] > 0 ? 1 : 0,
            transform: counts[2] > 0 ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
          className='bg-gradient-to-l from-[rgb(249,253,255)] to-[rgb(220,237,253)] py-[30px] px-[110px] md:px-[60px] mt-[1px] md:mt-0 lg:px-[30px] lg:py-[25px] text-[45px] font-semibold'>
          {counts[2]}+
          <p className="text-[18px] font-normal tracking-wider">Happy Clients</p>
        </div>
      </div>

      <div className="h-6 p-2 ml-3 bg-blue-400"></div>
    </div>
  );
};

export default ScrollCounters;
