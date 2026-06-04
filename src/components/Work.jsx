import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const Work = () => {

useGSAP(() => {
  const allProjects = document.querySelectorAll('.project-box');

  allProjects.forEach((project) => {
    const projectTitle = project.querySelector('.project-title');
    const projectParagraphs = project.querySelector('.project-paragraphs');
    const projectImage = project.querySelector('.project-img');

    const textSplit = new SplitText(projectParagraphs, {
      type: 'lines,words',
      linesClass: 'overflow-hidden block'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })
    .fromTo(
      projectTitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      textSplit.words,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.02, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      projectImage,
      { opacity: 0, x: 100, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1 },
      "-=0.6"
    );
  }, []);
});

  return (
    <div className='w-full h-auto text-white overflow-hidden font-Rale'>
      <section id="works" className='max-w-[90%] xl:max-w-[85%] mx-auto px-6 pt-1 pb-20 md:px-12 lg:px-16'>
        
        <div className='relative mb-16 md:mb-24'>
          <h1 className='text-5xl md:text-6xl font-bold'>My Works</h1> 
          <span className="block mt-4 h-px w-full bg-white/60"></span>
        </div> 

        <div className='flex flex-col gap-y-32'>
          
          <div className='project-box grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-start'>
            <div className='text-content w-full'>
              <h2 className='project-title text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
                1 - Mocktails Brochure Website :
              </h2>
              <div className='project-paragraphs text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
                <p>- Engineered an brochure website for a luxury cocktail lounge using JavaScript and GSAP (ScrollTrigger & SplitText).</p>
                <p>- Utilized GSAP SplitText to break  individual characters and words, showing premium stagger animations during user scroll transitions.</p>
                <p>- Implemented GSAP ScrollTrigger to control complex timeline animations, tying user scroll depth to smooth CSS grid transformations, parallax imagery, and reveal effects.</p>
              </div>
            </div>
            <div className='image-container w-full flex justify-center lg:justify-end'>
              <img className='project-img w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' src='src/images/mocktail.png' alt="Mocktail Project" />
            </div>
          </div>

          <div className='project-box grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-start'>
            <div className='text-content w-full'>
              <h2 className='project-title text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
                2 - Portfolio Website :
              </h2>
              <div className='project-paragraphs text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
                <p>- Made a website for my Portfolio showcase using React, GSAP (ScrollTrigger & SplitText) and Motion.</p>
                <p>- Utilized Motion for smooth and unique button transition animations and GSAP SplitText for smooth text animation upon triggering scroll.</p>
                <p>- Implemented GSAP ScrollTrigger to control complex timeline animations, tying user scroll depth to smooth CSS grid transformations, parallax imagery, and reveal effects.</p>
              </div>
            </div>
            <div className='image-container w-full flex justify-center lg:justify-end'>
              <img className='project-img w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' src='src/images/portfolio.png' alt="Mocktail Project" />
            </div>
          </div>

          <div className='project-box grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-start'>
            <div className='text-content w-full'>
              <h2 className='project-title text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
              3 - Weather Application :
              </h2>
              <div className='project-paragraphs text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
                <p>- Developed a type-safe, responsive weather application utilizing React and TypeScript to deliver real-time, global forecast metrics.</p>
                <p>- Integrated the OpenWeatherAPI via Axios to asynchronously fetch, structure, and render dynamic weather data based on user input.</p>
                <p>- Leveraged TypeScript interfaces to strictly define API response, minimizing runtime errors and ensuring code maintainability.</p>
              </div>
            </div>
            <div className='image-container w-full flex justify-center lg:justify-end'>
              <img className='project-img w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' src='src/images/weather.png' alt="weather Project" />
            </div>
          </div>

          <div className='project-box grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-start'>
            <div className='text-content w-full'>
              <h2 className='project-title text-2xl sm:text-3xl font-bold tracking-tight mb-6'>
                4 - Todolist Application :
              </h2>
              <div className='project-paragraphs text-base md:text-lg text-neutral-400 leading-relaxed space-y-6'>
                <p>- A minimalist task management app built to use DOM manipulation and clean user interactions.</p>
                <p>- Usage of React useState, Tailwind and TypeScript Libraries were used in the making of the application.</p>
                <p>- Emphasizes usage of TypeScript by static typing to the language to catch errors before runtime.</p>
              </div>
            </div>
            <div className='image-container w-full flex justify-center lg:justify-end'>
              <img className='project-img w-full max-w-xl h-auto rounded-lg shadow-2xl object-cover border border-white/10' src='src/images/todolist.png' alt="todolist Project" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Work;