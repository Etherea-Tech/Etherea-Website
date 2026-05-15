import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';

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
              We aren't just developers—we're technologists who think like business owners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative border-b border-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-8">
                It started with a shared vision between two colleagues who refused to settle for "good enough."
              </h3>
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
              className="relative aspect-square flex items-center justify-center bg-[#050505] border border-gray-800 rounded-2xl overflow-hidden"
            >
               {/* Abstract visual replacing a photo */}
               <div className="absolute inset-0 flex items-center justify-center opacity-30">
                 <div className="w-64 h-64 border border-white rounded-full animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute w-48 h-48 border border-white/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                 <div className="absolute w-32 h-32 border border-white/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
               </div>
               <h3 className="text-8xl font-black text-white/5 font-heading uppercase">Origins</h3>
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
                title: "Client-First, Always",
                desc: "Your success isn't a tagline for us—it's literally how we measure ours. We don't pivot until you pivot. No shortcuts, no fluff, just a straight line from your goal to our execution."
              },
              {
                title: "Quality That Doesn't Bend",
                desc: "We're borderline obsessive about this. If our name's on it, it works flawlessly. Not \"pretty good for the budget\" or \"we'll patch it later.\" Right the first time, every time."
              },
              {
                title: "Built for Speed, Designed to Last",
                desc: "Markets shift. Requirements evolve. Competitors move. We get it. That's why we stay nimble without losing our grip—your project keeps momentum even when everything around it changes."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp} 
                className="bg-[#080808] border border-gray-800 p-10 rounded-2xl hover:border-gray-600 transition-colors group"
              >
                <div className="text-4xl font-light text-gray-700 group-hover:text-white transition-colors mb-6 font-heading">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
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
