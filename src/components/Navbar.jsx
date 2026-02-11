import React from "react";
// import { Link } from 'react-router-dom'
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 55) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={` my-3 sm:my-5 mx-auto p-2 sm:p-6    ${scrolled ? "scrolled" : ""} fixed w-full top-0 z-1000 transition delay-150 ease-in-out `}
    >
      <div className=" p-2 flex justify-center sm:justify-between items-center ">
        <div className="w-1/3 sm:w-2/4 font-bold  sm:text-3xl">
          Abhipsa Mohapatra
        </div>
        <div className="w-1/2  sm:w-2/4 flex justify-center items-center  gap-5  sm:gap-12">
          <div>Home</div>
          <div>Skills</div>
          <div>Projects</div>
          <div className="flex gap-1 sm:gap-2">
            <a
              href="#"
              className="relative group flex items-center justify-center border-2 border-white rounded-full 
             h-8 w-8 sm:h-10 sm:w-10 
             overflow-hidden transition-all duration-300 hover:scale-110"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gray-400 transition-all duration-300 ease-out group-hover:h-full"></span>

              <FaLinkedin className="relative z-10 size-4 sm:size-5 text-white transition-colors duration-300 group-hover:text-black" />
            </a>
             <a
              href="#"
              className="relative group flex items-center justify-center border-2 border-white rounded-full 
             h-8 w-8 sm:h-10 sm:w-10 
             overflow-hidden transition-all duration-300 hover:scale-110"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gray-400 transition-all duration-300 ease-out group-hover:h-full"></span>

              <FaGithub className="relative z-10 size-4 sm:size-5 text-white transition-colors duration-300 group-hover:text-black" />
            </a>
            <a
              href="#"
              className="relative group flex items-center justify-center border-2 border-white rounded-full 
             h-8 w-8 sm:h-10 sm:w-10 
             overflow-hidden transition-all duration-300 hover:scale-110"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gray-400 transition-all duration-300 ease-out group-hover:h-full"></span>

              <SiLeetcode className="relative z-10 size-4 sm:size-5 text-white transition-colors duration-300 group-hover:text-black" />
            </a>
          </div>
        </div>
        <a
          href="#"
          className="w-1/4 hidden sm:block p-2 border text-center transition-all duration-500 ease-in-out bg-bottom-left bg-linear-to-r from-gray-400 to-gray-700 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-white hover:scale-110"
        >
          Let's Connect
        </a>{" "}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
