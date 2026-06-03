import React from 'react'
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText.js";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";


const Skills = () => {
useGSAP(() => {
  const skillsSplit = new SplitText(".skill-title", {
    type: "lines",
  });

  gsap.from(skillsSplit.lines, {
    opacity: 0,
    filter: "blur(10px)",
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skill",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".skill-btn", {
    opacity: 0,
    scale: 0.7,
    duration: 2,
    stagger: 0.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".skill",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
  return (
    <div>
     <div className='w-full h-auto text-white overflow-hidden font-Rale'>
      <section className='skill max-w-[90%] xl:max-w-[85%] mx-auto px-6 pt-20 pb-20 md:px-12 lg:px-16'>
        
        <div className='relative mb-16 md:mb-24'>
          <h1 className='skill-title text-4xl md:text-6xl font-bold'>My Skills</h1> 
          <span className="block mt-4 h-px w-full bg-white/60"></span>
        </div> 
        <div className='flex flex-row'>
                <div>
                    <h2 className='skill-title text-4xl mb-7 font-bold'>FRONTEND</h2>
                    <div className='skills-section flex flex-wrap gap-4'>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             React
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             TypeScript
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Tailwind CSS
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             GSAP
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Motion
                            </motion.button>
                    </div>
                </div>
                <div className='ml-50'>
                    <h2 className='skill-title text-4xl mb-7 font-bold'>TOOLS</h2>
                         <div className='flex flex-wrap gap-4'>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Figma
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Blender
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             VSCode
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Git
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             LinuxMint
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Windows
                            </motion.button>
                            <motion.button className='skill-btn text-xl border rounded-3xl bg-gray-950 border-white p-2'
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000", borderColor: "#000000", }}>
                             Kdenlive
                            </motion.button>

                    </div>
                </div>
        </div>

        </section>
    </div>
</div>
  )
}

export default Skills
