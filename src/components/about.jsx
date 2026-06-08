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
  const PicAnim = document.querySelectorAll('.pic');

  gsap.from(PicAnim,{
    filter: "blur(10px)",
    opacity: 0,
    duration: 2.5,
    ease: 'power3.out',
    stagger: 0.09,
    delay: 2.7,
  })
  
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
    <section id="home" className="flex flex-col justify-center items-center h-screen max-w-8xl mx-auto px-6 pt-100 pb-0 md:px-12">
      <div>
      <h1 className="name text-9xl text-white -translate-x-90 -translate-y-40 tracking-widest font-Rale font-thin">VIJAY PAUL</h1>
      <p className="title text-white -translate-x-80 -translate-y-40 text-2xl mt-7 font-Gsans">Front-End / Motion / Interactive UI Developer</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="pl-75">
        <img className="pic h-100 w-140 object-fill rounded-2xl" src="/images/motivation.png"></img>
      </div>
      <div className="pl-45 pt-10">
      <p className="about text-white font-Rale text-3xl">ABOUT ME
        <span className="block mt-3 h-px w-screen bg-white/60"></span>
      </p>
      <p className="about text-white font-Rale text-[20px]"> 
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
      </div>
      </div>
      </section>
    </div>
    </>
  )
}

export default About