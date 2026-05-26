import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import About from './components/About.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <About />
    </main>
  )
}

export default App
