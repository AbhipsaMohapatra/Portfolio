import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const dots = Array.from({ length: 20 });
  let get =()=>{
    return Math.random() * 100
  }
  let get2 = ()=>{
    return Math.random()*0.5
  }
  return (
    <section className="relative overflow-hidden my-20 text-xl pt-20" id="home">
      {/* --- MAGIC FLOATING ELEMENTS --- */}
     <div className="absolute inset-0 pointer-events-none">
        {dots.map((_, i) => (
          <div 
            key={i} 
            className={`magic-dot dot-${i % 4}`} // Cycles through 4 different sizes/speeds
            style={{
              top: `${get()}%`,
              left: `${get()}%`,
              animationDelay: `${get2()}s`,
              opacity:1
            }}
          />
        ))}
      </div>
      {/* ------------------------------- */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-10">
          
          {/* TEXT AREA */}
          <div className="flex-1 md:min-w-[600px] ml-0 md:ml-10">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-sm uppercase tracking-widest text-sm font-bold shadow-lg">
              Welcome to my Portfolio
            </span>

            <h1 className="text-2xl md:text-5xl font-extrabold mt-4 mb-3 leading-tight min-h-[120px]">
              {`Hi! I'm Abhipsa, `}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                <Typewriter
                  words={["Web Developer", "AI Enthusiast", "Open Source Contributor", "Problem Solver"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <a href="#contacts">
               <button  className='group mt-6 border-2 border-white flex gap-2 justify-center items-center px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300' onClick={() => console.log('connect')}>
              Let's Connect <BsArrowRightCircle className="group-hover:translate-x-1 transition-transform"/>
            </button>

            </a>
            
           
          </div>

          {/* IMAGE AREA */}
          <div className="flex-shrink-0 flex justify-center mr-4">
            <div className="animate-bounce-slow">
              <img
                className="w-48 h-48 md:w-85 md:h-85 object-cover rounded-full border-4 border-pink-600 shadow-2xl"
                src="../public/homepic.png"
                alt="Header Img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;