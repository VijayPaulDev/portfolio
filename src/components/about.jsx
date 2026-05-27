import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText.js";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
useGSAP(()=>{
  const nameSplit = new SplitText('.name', { type: 'chars, words'});
  const titleSplit = new SplitText('.title', { type: 'lines'});
  
  gsap.from(nameSplit.chars,{
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
    stagger: 0.05,
    delay: 1.5,
    y: 30
  })
    gsap.from(titleSplit.lines,{
    opacity: 0,
    duration: 2,
    ease: 'expo.out',
    stagger: 0.2,
    delay: 1,
  })

}, []);

  return (
    <>
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="name text-9xl text-white -translate-x-100 -translate-y-40 tracking-widest font-Rale font-thin">VIJAY PAUL</h1>
      <p className="title text-white -translate-x-137 -translate-y-40 text-2xl mt-7 font-Gsans">Front-End / Motion / Interactive UI Developer</p>
      <p className="title text-white -translate-x-150 text-2xl mt-7 font-Gsans">For business inquiries, email me at <br></br>vjpaul03@gmail.com</p>
      
    </section>
    </>
  )
}

export default About