import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const videoRef = useRef(null);

  const normalHeartbeat = "M0,50 L0,50 Q5,50 5,0 L10,100 L15,0 L20,100 L25,50 L30,50 C35,50 35,20 40,20 C45,20 45,80 50,80 C55,80 55,50 60,50 L65,50 L65,50";
  const flatline = "M0,50 L65,50";

  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      >
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
      </video>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        style={{ pointerEvents: 'none' }}
      >
        <source src={`${process.env.PUBLIC_URL}/swall.mp4`} type="video/mp4" />
      </video>
      <div className='h-screen w-screen absolute inset-0 opacity-45 flex justify-center items-center text-[250px] leading-none text-[#45D2FF] font-extrabold -mt-[15%]'>
        <div className=''>
          OD
          <div className='text-center text-xs md:text-base'>
            CA: updating...
          </div>
        </div>
      </div>
          <div className='absolute top-5 left-5 flex justify-center items-center z-10'>
            <a href="https://x.com/" className='z-10'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#45D2FF" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#45D2FF" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
          </div>
      <motion.img
        src="OD.png"
        className="absolute bottom-0 w-[80%] md:w-[40%] opacity-60"
        animate={{ opacity: [0.7, 0.4, 0.7, 0.3, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Realistic Hospital ECG Monitor */}
      <div className="absolute top-4 right-4 w-[50vw] md:w-[30vw] max-w-[400px] h-[20vh] max-h-[300px] border-2">
        <div className="bg-black w-full h-full rounded relative overflow-hidden">
          {/* Grid lines */}
          <svg width="100%" height="100%" className="absolute">
            <defs>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#004400" strokeWidth="0.5" />
              </pattern>
              <pattern id="largeGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)" />
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#006600" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#largeGrid)" />
          </svg>
          
          {/* ECG Line */}
          <svg width="100%" height="100%" viewBox="0 0 65 100" preserveAspectRatio="none" className="absolute">
            <motion.path
              d={normalHeartbeat}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                d: [normalHeartbeat, normalHeartbeat, flatline]
              }}
              transition={{ 
                duration: 6,
                times: [0, 0.8, 1],
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
          
          {/* Monitor details */}
          <div className="absolute top-2 left-2 text-green-500 text-xs md:text-sm font-mono">
            <div>HR 75</div>
            <div>SpO2 98%</div>
          </div>
          <div className="absolute bottom-2 right-2 text-green-500 text-xs md:text-sm font-mono">
            ECG
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;