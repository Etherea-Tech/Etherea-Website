import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';

const CustomSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 682.667 682.667" {...props}>
    <g>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" /></clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
        <path d="m0 0 55.89-106.89-.36-.19-81.48 22.06-28.39-79.5-62.17 118.9" transform="translate(378.35 174.52)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="m0 0-55.89-106.89.36-.19 81.48 22.06 28.39-79.5 62.17 118.9" transform="translate(133.65 174.52)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="M0 0c81.314-20.135 141.593-93.594 141.593-181.132 0-103.054-83.541-186.595-186.594-186.595-103.054 0-186.595 83.541-186.595 186.595 0 87.538 60.279 160.996 141.593 181.132" transform="translate(301.002 496.537)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="M0 0c0-5.523-4.477-10-10-10S-20-5.523-20 0s4.477 10 10 10S0 5.523 0 0" transform="translate(266 502)" fill="currentColor" />
        <path d="M0 0c-75.318 0-136.595 61.276-136.595 136.595 0 75.318 61.277 136.594 136.595 136.594s136.595-61.276 136.595-136.594C136.595 61.276 75.318 0 0 0Z" transform="translate(256 178.81)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="M0 0h19.664v-92" transform="translate(236.35 361.405)" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      </g>
    </g>
  </svg>
);

const QualitySVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" {...props}>
    <g>
      <path d="M497.563 254.898c11.836-23.416 6.935-51.211-12.196-69.167L457.6 159.669c-6.405-6.01-10.32-12.793-12.324-21.347l-8.687-37.076C430.606 75.7 408.984 57.557 382.786 56.1l-38.021-2.115c-8.771-.488-16.131-3.167-23.163-8.43l-30.486-22.82c-21.002-15.722-49.229-15.724-70.234 0l-30.486 22.819c-7.032 5.264-14.393 7.943-23.163 8.431L129.212 56.1c-26.197 1.457-47.819 19.6-53.803 45.146l-8.687 37.077c-2.003 8.553-5.919 15.336-12.323 21.347l-27.768 26.061C7.5 203.686 2.599 231.482 14.435 254.898l17.18 33.985c3.963 7.84 5.323 15.553 4.28 24.275l-4.52 37.812c-3.113 26.051 10.999 50.494 35.117 60.824l35.006 14.992c8.074 3.458 14.074 8.492 18.883 15.843l20.843 31.871c14.359 21.958 40.881 31.612 65.998 24.021l36.452-11.016c8.409-2.542 16.241-2.541 24.648 0l36.452 11.016a59.365 59.365 0 0 0 17.2 2.561c19.353-.001 37.706-9.62 48.798-26.582l20.844-31.871c4.808-7.351 10.808-12.386 18.882-15.844l35.006-14.992c24.118-10.33 38.231-34.773 35.117-60.824l-4.52-37.813c-1.043-8.721.317-16.435 4.28-24.274zm-31.459 26.768c-5.377 10.637-7.303 21.559-5.888 33.391l4.52 37.812c2.299 19.235-7.722 36.591-25.529 44.218l-35.006 14.992c-10.955 4.692-19.451 11.821-25.974 21.794l-20.844 31.871c-10.602 16.212-29.437 23.066-47.979 17.462l-36.452-11.016c-5.704-1.724-11.327-2.586-16.953-2.586-5.624 0-11.25.862-16.953 2.586l-36.452 11.016c-18.542 5.603-37.376-1.25-47.979-17.462l-20.843-31.871c-6.524-9.974-15.021-17.103-25.975-21.794l-35.006-14.992c-17.808-7.626-27.828-24.983-25.529-44.218l4.52-37.812c1.415-11.833-.511-22.755-5.888-33.392l-17.18-33.985c-8.738-17.289-5.259-37.025 8.866-50.283l27.768-26.061c8.689-8.155 14.234-17.76 16.952-29.364l8.687-37.077c4.418-18.861 19.771-31.744 39.113-32.819l38.021-2.115c11.899-.662 22.321-4.456 31.862-11.597l30.486-22.82c15.508-11.608 35.551-11.609 51.059 0l30.486 22.82c9.541 7.141 19.964 10.935 31.862 11.597l38.021 2.115c19.343 1.076 34.695 13.958 39.113 32.82l8.687 37.076c2.718 11.605 8.264 21.21 16.953 29.364l27.767 26.061c14.125 13.257 17.604 32.994 8.866 50.283zM256 92.454C165.82 92.454 92.454 165.82 92.454 256S165.82 419.546 256 419.546 419.546 346.18 419.546 256 346.18 92.454 256 92.454zm0 311.092c-81.357 0-147.546-66.189-147.546-147.546S174.643 108.454 256 108.454 403.546 174.643 403.546 256 337.357 403.546 256 403.546zm68.093-221.676h-.119c-7.994.031-15.491 3.173-21.108 8.848l-66.341 67.001-27.398-27.399c-5.658-5.658-13.182-8.774-21.186-8.774-8.005 0-15.528 3.116-21.187 8.775-11.681 11.682-11.681 30.69 0 42.371l48.661 48.661c5.841 5.84 13.513 8.761 21.186 8.761s15.346-2.92 21.187-8.761c18.449-18.45 37.064-37.332 55.067-55.591a18653.75 18653.75 0 0 1 32.48-32.891c11.602-11.708 11.541-30.68-.136-42.292-5.649-5.62-13.14-8.709-21.106-8.709zm9.877 39.738a19406.177 19406.177 0 0 0-32.51 32.92c-17.982 18.24-36.577 37.101-54.986 55.51-5.444 5.444-14.303 5.444-19.745 0l-48.66-48.661c-5.443-5.443-5.443-14.301 0-19.745a13.87 13.87 0 0 1 9.872-4.088c3.729 0 7.236 1.452 9.872 4.088l33.083 33.084a8.002 8.002 0 0 0 5.657 2.343h.02a8 8 0 0 0 5.665-2.371l71.998-72.715a13.768 13.768 0 0 1 9.8-4.105h.056c3.709 0 7.196 1.438 9.826 4.053 5.431 5.404 5.455 14.234.052 19.687z" fill="currentColor"></path>
    </g>
  </svg>
);

const SpeedSVG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 682.667 682.667" {...props}>
    <g>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" /></clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
        <path d="m0 0 21.998 110" transform="translate(170.813 47)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="m0 0 110 200H-70L-170-80h160l-40-202L150 0Z" transform="translate(276 297)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="m0 0-64.285-180" transform="translate(110.285 407.397)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="m0 0-55-100" transform="translate(454.475 497)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="M0 0v0l-71.429-102" transform="translate(371.162 117)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d="m0 0-35.715-50" transform="translate(466 249.772)" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      </g>
    </g>
  </svg>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// SVG Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark to-dark"></div>
  </div>
);

export default function About() {
  return (
    <div className="bg-dark min-h-screen text-white pt-20">
      <SEO 
        title="About Us | Etherea Tech"
        description="Our story, what drives us, and why companies choose Etherea Tech for their most critical digital initiatives."
      />
      
      {/* Hero Section */}
      <section className="relative py-32 border-b border-gray-900 overflow-hidden">
        <GridBackground />
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black font-heading uppercase tracking-tighter mb-8 leading-none">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              We aren't just developers we're real world problem solvers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative border-b border-gray-900 overflow-hidden">
        <div className="container-custom">
          {/* Full Width Quote */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="mb-32 text-center max-w-5xl mx-auto px-4"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-12">Our Story</h2>
            <div className="relative inline-block">
               <span className="absolute -top-12 -left-8 md:-left-16 text-6xl md:text-9xl text-gray-800 font-serif opacity-30 select-none">"</span>
               <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white leading-tight relative z-10">
                 It started with a shared vision between two colleagues who refused to settle for{" "}
                 <span className="relative inline-block whitespace-nowrap px-4 py-1 mt-4 md:mt-0">
                   {/* Growing Highlight Box */}
                   <motion.span 
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     viewport={{ once: false, margin: "-150px" }}
                     transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                     className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gray-100 to-gray-300 z-0 rounded-sm"
                   >
                     {/* Left static cursor */}
                     <motion.span 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: false, margin: "-150px" }}
                       transition={{ delay: 0.2 }}
                       className="absolute left-0 top-[-15%] bottom-[-15%] w-[3px] bg-gray-500"
                     >
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-500"></span>
                     </motion.span>
                     
                     {/* Right moving cursor with blink effect */}
                     <motion.span 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: [0, 1, 1, 0, 1] }}
                       viewport={{ once: false, margin: "-150px" }}
                       transition={{ 
                         opacity: { times: [0, 0.2, 0.8, 0.9, 1], duration: 1.5, repeat: Infinity, repeatDelay: 0.5 } 
                       }}
                       className="absolute right-0 top-[-15%] bottom-[-15%] w-[3px] bg-gray-500"
                     >
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-gray-500"></span>
                     </motion.span>
                   </motion.span>
                   
                   {/* Text changes to dark so it's readable on the light silver highlight */}
                   <motion.span 
                     initial={{ color: "#ffffff" }}
                     whileInView={{ color: "#111827" }}
                     viewport={{ once: false, margin: "-150px" }}
                     transition={{ duration: 0.4, delay: 0.4 }}
                     className="relative z-10 italic font-bold"
                   >
                     "good enough."
                   </motion.span>
                 </span>
               </h3>
               <span className="absolute -bottom-20 -right-8 md:-right-16 text-6xl md:text-9xl text-gray-800 font-serif opacity-30 select-none">"</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            >
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  Kunal and Nishi weren't just coworkers—they were problem-solvers who spent countless late nights debugging not just code, but the very way tech companies approached client work. They saw the same patterns everywhere: overpromised timelines, cookie-cutter solutions, and support that vanished after launch.
                </p>
                <p>
                  So they made a pact: if they were going to build something, it would be different. Real different.
                </p>
                <p>
                  That's how Etherea Tech was born—not in a boardroom, but over coffee-fueled conversations about what clients actually need versus what they're usually sold.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center rounded-2xl overflow-hidden bg-[#020202] border border-gray-900"
            >
               {/* Intense Blue Ambient Glow (Volumetric light effect) */}
               <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
               <div className="absolute bottom-0 w-full h-1/2 bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
               
               {/* Core Glowing Square */}
               <motion.div 
                 animate={{ y: [-15, 15, -15], rotateX: [5, -5, 5], rotateY: [-5, 5, -5] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.6),inset_0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center z-10"
                 style={{ transformStyle: 'preserve-3d' }}
               >
                 {/* Internal bright core */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/10 rounded-3xl mix-blend-overlay"></div>
                 
                 {/* Inner Logo Shape */}
                 <motion.div 
                   animate={{ opacity: [0.8, 1, 0.8] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="text-white text-8xl md:text-9xl font-black font-heading drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                 >
                   E
                 </motion.div>
               </motion.div>

               {/* Pink/Purple glow from below (simulating reflection) */}
               <div className="absolute -bottom-20 w-80 h-40 bg-pink-600/30 blur-[80px] rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-32 bg-[#020202] border-b border-gray-900">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Core Principles</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">What Drives Us</h3>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Client",
                subtitle: "First As Always",
                desc: "Your success isn't a tagline for us—it's literally how we measure ours. We don't pivot until you pivot. No shortcuts, no fluff, just a straight line from your goal to our execution.",
                icon: CustomSVG
              },
              {
                title: "Quality",
                subtitle: "That Doesn't Bend",
                desc: "We're borderline obsessive about this. If our name's on it, it works flawlessly. Not \"pretty good for the budget\" or \"we'll patch it later.\" Right the first time, every time.",
                icon: QualitySVG
              },
              {
                title: "Speed",
                subtitle: "Designed To Last",
                desc: "Markets shift. Requirements evolve. Competitors move. We get it. That's why we stay nimble without losing our grip—your project keeps momentum even when everything around it changes.",
                icon: SpeedSVG
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp} 
                className="relative bg-[#0A071E] border border-indigo-900/30 p-8 rounded-[32px] overflow-hidden group hover:bg-[#120D2C] hover:backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col h-full z-10"
              >
                {/* Giant faint number Top Right */}
                <div className="absolute top-4 right-6 text-[120px] font-black text-white/[0.02] leading-none group-hover:text-blue-500/[0.05] transition-colors duration-500 font-heading">
                  0{idx + 1}
                </div>

                {/* Top Left Icon inside a squircle */}
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20 relative z-10 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h4 className="text-3xl font-black text-white mb-1 leading-tight tracking-tight font-heading">{item.title}</h4>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">{item.subtitle}</div>
                  <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Companies Choose Etherea */}
      <section className="py-32 border-b border-gray-900 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">The Advantage</h2>
                <h3 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-8">Why Companies Choose Etherea</h3>
                <div className="w-20 h-1 bg-white/20"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-8 space-y-6"
            >
              {[
                { title: "A Team That Actually Gets It", desc: "We're not just developers—we're technologists who think like business owners. Every line of code we write is connected to your bottom line." },
                { title: "Quality You Can Feel", desc: "From architecture to deployment, we run checks at every stage. Not because we have to—because we can't sleep at night knowing something slipped through." },
                { title: "Support That Sticks Around", desc: "Launch day isn't goodbye—it's hello. We're in this for the long haul, keeping your systems healthy and your team confident." },
                { title: "Solutions Tailored to You, Not Templates", desc: "Off-the-shelf doesn't cut it. We dig into your workflow, your challenges, your users—then build something that fits like it was always meant to be there." },
                { title: "Deadlines We Actually Hit", desc: "Time isn't flexible, and we respect that. When we commit to a date, we reverse-engineer the entire process to make sure we're there—on time, ready to go." },
                { title: "A Track Record That Speaks", desc: "We've turned \"impossible timelines\" into launch parties and \"legacy nightmares\" into systems people actually enjoy using. Our clients don't just come back—they refer us." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  className="group border border-gray-800 bg-[#050505] p-8 rounded-xl flex flex-col md:flex-row gap-6 items-start hover:bg-[#0a0a0a] transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 bg-white rounded-sm group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Etherea Difference (CTA) */}
      <section className="py-40 relative flex items-center justify-center text-center overflow-hidden">
        {/* Animated Background Ring */}
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"
        ></motion.div>
        
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">The Etherea Difference</h2>
            <p className="text-2xl md:text-4xl font-light text-gray-300 leading-tight mb-8">
              We're not here to be another vendor in your stack. We're here to be the technical partner you actually want in the room when decisions get tough.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Because at the end of the day, Kunal and Nishi built Etherea on one simple belief: technology should solve problems, not create them.
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Let's build something real together
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
