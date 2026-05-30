import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText.js";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {

useGSAP(()=>{
  const nameSplit = new SplitText('.name', { type: 'chars, words'});
  const titleSplit = new SplitText('.title', { type: 'lines'});
  const aboutSplit = new SplitText('.about', { type: 'lines'});
  
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
    duration: 1,
    ease: 'expo.out',
    stagger: 0.2,
    delay: 1,
  })

     gsap.from(aboutSplit.lines,{
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
    stagger: 0.2,
    delay: 0.5,
  })

}, []);

  return (
    <>
    <div className="relative w-full min-h-screen mb-0 gap-0 pb-30">
    <section className="home flex flex-col justify-center items-center h-screen max-w-7xl mx-auto px-6 pt-100 pb-0 md:px-12">
      <h1 className="name text-9xl text-white -translate-x-90 -translate-y-30 tracking-widest font-Rale font-thin">VIJAY PAUL</h1>
      <p className="title text-white -translate-x-127 -translate-y-30 text-2xl mt-7 font-Gsans">Front-End / Motion / Interactive UI Developer</p>
      <p className="title text-white -translate-x-140 translate-y-60 text-2xl mt-7 font-Gsans">For business inquiries, email me at <br></br>vjpaul03@gmail.com</p>
      
      
      <p className="about text-white translate-x-280 -translate-y-40 font-Rale text-3xl">ABOUT ME
        <span className="block mt-3 h-px w-screen bg-white/60"></span>
      </p>
      <p className="about text-white translate-x-135 -translate-y-33 font-Rale text-[20px]"> 
      After completing my B.Tech and MBA, I shifted focus toward independent work,
      <span className="block mt-2">
      including Govt-exam preparation, Content Creation, and continued self-driven
      </span>
      <span>
       learning in web development and interactive motion design. 
      </span>
      <br /><br />
      My main focus is web development, and I have worked on
      <span className="block mt-2">
      several front-end projects. I enjoy exploring
      </span>
      <span className="block mt-2">
      new fun technologies and experimenting with creative ideas.
      </span>
      <br /><br />
      Outside of programming, I Workout, Video edit, Play video games and tennis.</p>
      </section>
    </div>
    </>
  )
}

export default About