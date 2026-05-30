import React from 'react'

const Work = () => {
  return (
    <div className='w-full min-h-screen' >
      <section className='works max-w-7xl mx-auto px-6 py-20 md:px-12 font-Rale'>
      <h1  className='text-white text-6xl relative mb-16 md:mb-24 -translate-y-70 -translate-x-50 font-Rale'>My Works
      <span className="block mt-3 h-px w-screen bg-white/60"></span>
      </h1> 

      <div className='mocktails text-white'>
        <h1 className='text-3xl -translate-x-50 -translate-y-70 '>1- Mocktails Brochure Website :</h1>
        <p className='text-xl -translate-x-45 -translate-y-60'>-Engineered an immersive, high-end digital brochure website
          <br></br>
           for a luxury cocktail lounge using JavaScript and GSAP (ScrollTrigger & SplitText).
        <br></br>
        <br></br>
          -Utilized GSAP SplitText to break down headers into individual characters and words,
          <br></br>
           orchestrating premium stagger animations during user scroll transitions.
      <br></br>
      <br></br>
          -Implemented GSAP ScrollTrigger to control complex timeline animations, 
          <br></br>
          tying user scroll depth to smooth CSS grid transformations, parallax imagery, and reveal effects.
        </p>
        <img className='mocktail object-scale-down h-256 w-144 translate-x-220 -translate-y-220' src='src\images\mocktail.png'></img>
      </div>

      </section>
    </div>
  )
}

export default Work
