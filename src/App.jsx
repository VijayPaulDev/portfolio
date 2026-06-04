import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <Navbar />
      <About />
      <Work />
      <Skills />
    </main>
  )
}

export default App
