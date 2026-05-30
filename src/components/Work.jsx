import React from 'react'

const Work = () => {
  return (
    <div className='w-full h-auto text-white overflow-hidden font-Rale'>
      
      <section className='works max-w-[90%] xl:max-w-[85%] mx-auto px-6 pt-0 pb-20 md:px-12 lg:px-16'>
        
        <div className='relative mb-16 md:mb-24'>
          <h1 className='text-5xl md:text-6xl font-bold'>My Works</h1> 

          <span className="block mt-4 h-px w-full bg-white/30"></span>
        </div> 

        <div className='mocktails grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start'>
          
          <div className='text-content w-full'>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
              1- Mocktails Brochure Website :
            </h2>
            <div className='text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
              <p>
                - Engineered an immersive, high-end digital brochure website for a luxury cocktail lounge using JavaScript and GSAP (ScrollTrigger & SplitText).
              </p>
              <p>
                - Utilized GSAP SplitText to break down headers into individual characters and words, orchestrating premium stagger animations during user scroll transitions.
              </p>
              <p>
                - Implemented GSAP ScrollTrigger to control complex timeline animations, tying user scroll depth to smooth CSS grid transformations, parallax imagery, and reveal effects.
              </p>
            </div>
          </div>

          <div className='image-container w-full flex justify-center lg:justify-end'>
            <img 
              className='mocktailIMG w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' 
              src='src/images/mocktail.png' 
              alt="Mocktail Project"
            />
          </div>

        </div>
    
      </section>
    </div>
  )
}

export default Work