import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText.js";
import gsap from "gsap";


const Navbar = () => {

useGSAP(()=>{
  const navbarSplit = new SplitText('.navbar', { type: 'lines'});
  

     gsap.from(navbarSplit.lines,{
    opacity: 0,
    duration: 0.5,
    ease: 'expo.in',
    stagger: 0.01,
    filter: "blur(10px)"
  })

}, []);



  return (
    <nav className="fixed left-8 top-1/2 -translate-y-100 z-50">

      <ul className="flex flex-col gap-8 navbar">

        <li>
          <a
            href="#home"
            className="font-Rale relative text-white/60 text-xl tracking-widest transition-all duration-300 hover:text-white
             hover:drop-shadow-[0_0_12px_white] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5
              after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            HOME
          </a>
        </li>

        <li>
          <a
            href="#works"
            className="font-Rale relative text-white/60 text-xl tracking-widest transition-all
             duration-300 hover:text-white hover:drop-shadow-[0_0_12px_white] after:content-[''] after:absolute
              after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            WORKS
          </a>
        </li>

      </ul>
        <div className="flex flex-col gap-8 translate-y-10 navbar">

        <a href="https://github.com/VijayPaulDev" target="_blank" className="text-white/60 text-2xl transition-all 
        duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_12px_white]">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/vijay-paul-dev/" target="_blank" className="text-white/60 text-2xl transition-all 
        duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_12px_white]">
          <FaLinkedin />
        </a>

        <a href="mailto:vjpaul03@gmail.com" className="text-white/60 text-2xl transition-all 
        duration-300 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_12px_white]">
          <FaEnvelope />
        </a>

      </div>

    </nav>
  );
};

export default Navbar
