import React from 'react'

const Work = () => {
  return (
    <div className='w-full h-auto text-white overflow-hidden font-Rale'>
      
      <section className='works max-w-[90%] xl:max-w-[85%] mx-auto px-6 pt-0 pb-20 md:px-12 lg:px-16'>
        
        <div className='relative mb-16 md:mb-24'>
          <h1 className='text-5xl md:text-6xl font-bold'>My Works</h1> 

          <span className="block mt-4 h-px w-full bg-white/30"></span>
        </div> 

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start'>
          
          <div className='Mocktails text-content w-full pb-60 pt-30'>
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

          <div className='image-container w-full flex justify-center lg:justify-end pt-30'>
            <img 
              className='mocktailIMG w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' 
              src='src/images/mocktail.png' 
              alt="Mocktail Project"
            />
          </div>

        <div className='Weather text-content w-full pb-80'>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
              2- Weather Application :
            </h2>
            <div className='text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
              <p>
                - Developed a type-safe, responsive weather application utilizing React and TypeScript to deliver real-time, global forecast metrics.
              </p>
              <p>
                - Integrated the OpenWeatherAPI via Axios to asynchronously fetch, structure, and render dynamic weather data based on user input.
              </p>
              <p>
                - Leveraged TypeScript interfaces to strictly define API response schemas, minimizing runtime errors and ensuring code maintainability.
              </p>
            </div>
          </div>

          <div className='image-container w-full flex justify-center lg:justify-end'>
            <img 
              className='WeatherIMG w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' 
              src='src\images\weather.png' 
              alt="weather Project"
            />
          </div>

              <div className='Todolist text-content w-full pb-80'>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
              3- Todolist Application :
            </h2>
            <div className='text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
              <p>
                - A minimalist task management app built to use DOM manipulation, state persistence, and clean user interactions.
              </p>
              <p>
                - Usage of React useState, Tailwind and TypeScript Libraries were used in the making of the application.
              </p>
              <p>
                - Emphasizes usage of TypeScript by static typing to the language to catch errors before runtime.
              </p>
            </div>
          </div>

          <div className='image-container w-full flex justify-center lg:justify-end'>
            <img 
              className='todolistIMG w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' 
              src='src\images\todolist.png' 
              alt="todolist Project"
            />
          </div>



        </div>
    
      </section>
    </div>
  )
}

export default Work