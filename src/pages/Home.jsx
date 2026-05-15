import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  BiRightArrowAlt, BiChevronLeft, BiChevronRight, 
  BiBrain, BiBarChart, BiCloud, BiCodeAlt, BiCart, 
  BiPalette, BiMobile, BiWindow, BiCheckShield, BiTrendingUp,
  BiCrosshair, BiCube, BiShapeSquare, BiLayer,
  BiShapePolygon, BiWater, BiFastForward, BiPlus, BiAperture, BiBoltCircle, BiArrowFromBottom,
  BiCheckCircle, BiSun, BiHeart, BiTransfer, BiBlock, BiFile, BiReceipt, BiEnvelope
} from 'react-icons/bi';

// Icon Mapping
const IconMap = {
  BiBrain, BiBarChart, BiCloud, BiCodeAlt, BiCart,
  BiPalette, BiMobile, BiWindow, BiCheckShield, BiTrendingUp
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// 1. Geometric Hero Section
const FloatingGeometry = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[800px] h-[800px] border border-white/10 rounded-full" />
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute w-[1000px] h-[1000px] border border-white/5 rounded-full" />
    
    <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[400px] h-[400px] border border-white/20 rotate-45 bg-white/[0.02] backdrop-blur-[2px]" />
    <motion.div animate={{ rotate: -360, scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[300px] h-[300px] border border-white/30 -rotate-12 bg-white/[0.03] backdrop-blur-[4px]" />
  </div>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-dark bg-grid-pattern pt-20 border-b border-gray-900">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark to-dark opacity-90" />
    <FloatingGeometry />
    
    <div className="container-custom relative z-10 py-20 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div className="w-full max-w-6xl relative" initial="hidden" animate="visible" variants={staggerContainer}>
        {/* Structural Framing */}
        <div className="absolute -top-10 -left-10 w-6 h-6 border-t-2 border-l-2 border-white/30 hidden md:block"></div>
        <div className="absolute -bottom-10 -right-10 w-6 h-6 border-b-2 border-r-2 border-white/30 hidden md:block"></div>
        
        <div className="flex items-center gap-4 mb-8">
          <motion.div variants={fadeInUp} className="w-12 h-[1px] bg-white"></motion.div>
          <motion.span variants={fadeInUp} className="text-gray-400 tracking-[0.3em] text-sm font-bold uppercase">System Initialization</motion.span>
        </div>
        
        <motion.h1 variants={fadeInUp} className="text-white mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Architects of</span>
          Digital Evolution
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
            We engineer high-performance software, AI systems, and digital platforms with geometric precision.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 shrink-0">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 group">
              Initiate Project <BiRightArrowAlt className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// 1.5 Trusted By Companies
const TrustedBy = () => {
  const companies = [
    { name: 'Wildcrafted', icon: <BiShapePolygon /> },
    { name: 'Magnolia', icon: <BiWater /> },
    { name: 'StackedLab', icon: <BiLayer /> },
    { name: 'Warpspeed', icon: <BiFastForward /> },
    { name: 'Clandestine', icon: <BiPlus /> },
    { name: 'Shutterframe', icon: <BiAperture /> },
    { name: 'Powersurge', icon: <BiBoltCircle /> },
    { name: 'Leapyear', icon: <BiArrowFromBottom /> }
  ];

  return (
    <section className="py-20 bg-dark border-b border-gray-900 bg-dot-pattern">
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-xs md:text-sm text-gray-500 font-bold uppercase tracking-[0.2em] mb-10"
        >
          Trusted by 4,000+ innovative companies
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {companies.map((company, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-dark-light border border-gray-800 rounded-2xl p-6 md:p-8 flex items-center justify-center gap-3 group hover:border-gray-500 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl text-gray-500 group-hover:text-white transition-colors">{company.icon}</span>
              <span className="text-lg md:text-xl font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">{company.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. Bento Box Services
const BentoServices = () => {
  // Select 6 specific services for the bento grid to look perfect
  const bentoItems = servicesData.slice(0, 6);
  
  return (
    <section className="section-padding bg-dark relative">
      <div className="structural-line-v left-1/4 hidden lg:block"></div>
      <div className="structural-line-v left-2/4 hidden lg:block"></div>
      <div className="structural-line-v left-3/4 hidden lg:block"></div>
      
      <div className="container-custom relative z-10">
        <motion.div className="flex items-center justify-between mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
          <div>
            <h2 className="text-white mb-2">Core Capabilities</h2>
            <p className="text-gray-400 tracking-widest text-sm uppercase">Technical Stack Overview</p>
          </div>
          <Link to="/services" className="hidden md:flex items-center text-white hover:text-gray-300 font-bold tracking-widest text-sm uppercase group">
            View All Systems <BiRightArrowAlt className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          {bentoItems.map((service, idx) => {
            const Icon = IconMap[service.icon];
            // Make first two items span 2 columns to create a true bento feel
            const isLarge = idx === 0 || idx === 3;
            
            return (
              <motion.div 
                key={idx} variants={fadeInUp} 
                className={`card-bento group p-8 flex flex-col ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'} bg-gradient-to-br from-white/[0.03] to-transparent`}
              >
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-3xl text-white mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {Icon && <Icon />}
                </div>
                
                <h3 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-bold mb-4 text-white group-hover:text-gray-300 transition-colors uppercase`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {isLarge ? service.fullDescription.substring(0, 150) + '...' : service.shortDescription}
                </p>
                
                <Link to={`/services/${service.slug}`} className="mt-auto inline-flex items-center text-white border-b border-transparent group-hover:border-white pb-1 transition-all self-start uppercase tracking-widest text-xs font-bold">
                  Explore Module <BiRightArrowAlt className="ml-1 text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/services" className="btn-secondary inline-block">View All Systems</Link>
        </div>
      </div>
    </section>
  );
};

// 3. Why Choose Us (Geometric)
const TechnicalPillars = () => {
  const pillars = [
    { icon: <BiCube />, title: "Modular Architecture", desc: "Decoupled, scalable systems designed for infinite growth." },
    { icon: <BiCrosshair />, title: "Precision Engineering", desc: "Pixel-perfect UI paired with robust, error-free backends." },
    { icon: <BiLayer />, title: "Full-Stack Integration", desc: "Seamless synergy across your entire digital ecosystem." },
    { icon: <BiShapeSquare />, title: "Geometric Design", desc: "Structured, high-converting UX guided by data." }
  ];

  return (
    <section className="section-padding bg-dark border-y border-gray-900 bg-dot-pattern relative">
      <div className="absolute inset-0 bg-dark/80"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="mb-6">Structural Integrity</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 font-light mb-10 leading-relaxed">
              We build digital products with the precision of architectural blueprints. Every component is rigorously tested and optimized for peak performance.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative pl-6 border-l border-white/20 hover:border-white transition-colors duration-300 group">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-dark border border-gray-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    {p.icon}
                  </div>
                  <h4 className="font-bold mb-2 uppercase text-sm tracking-widest text-white mt-1">{p.title}</h4>
                  <p className="text-gray-400 font-light text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative h-[500px] hidden lg:flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-gray-800 relative flex items-center justify-center">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
              
              <motion.div animate={{ rotate: 180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-[300px] h-[300px] border border-white/10 flex items-center justify-center">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-[200px] h-[200px] bg-white/5 backdrop-blur-md border border-white/20 rotate-45 flex items-center justify-center">
                   <BiShapeSquare className="text-6xl text-white/50" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. Structural Stats
const AnimatedCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-10 border border-gray-900 bg-dark-light hover:bg-white/[0.02] transition-colors relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-5xl md:text-7xl font-black text-white font-heading mb-4 tracking-tighter">{count}</h3>
      <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section className="bg-dark pb-20">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatedCounter end={10} label="Years Active" />
        <AnimatedCounter end={250} label="Systems Built" />
        <AnimatedCounter end={150} label="Global Partners" />
        <AnimatedCounter end={45} label="Engineers" />
      </div>
    </div>
  </section>
);

// 4.5 Testimonials
const Testimonials = () => {
  const reviews = [
    {
      text: "We've been using Heizen to kick start every new project and can't imagine working without it.",
      name: "Sienna Hewitt",
      role: "Project Manager, Warpspeed",
      avatar: "https://i.pravatar.cc/150?img=5",
      company: "Warpspeed",
      companyIcon: <BiFastForward className="text-xl" />
    },
    {
      text: "Heizen has become an essential part of our design process. It speeds up our workflow and ensures every project starts with a solid foundation.",
      name: "Caitlyn King",
      role: "COO, OdeoLabs",
      avatar: "https://i.pravatar.cc/150?img=9",
      company: "OdeoLabs",
      companyIcon: <BiLayer className="text-xl" />
    },
    {
      text: "Every project starts with Heizen, and it's made a huge difference in our output. It's a game-changer for our design team.",
      name: "Olly Schroeder",
      role: "Designer, Nietzsche",
      avatar: "https://i.pravatar.cc/150?img=11",
      company: "Nietzsche",
      companyIcon: <BiSun className="text-xl" />
    },
    {
      text: "Using Heizen has streamlined our entire design process. It's an invaluable part of our studio!",
      name: "Riley O'Moore",
      role: "Design Engineer, QuartzAI",
      avatar: "https://i.pravatar.cc/150?img=12",
      company: "QuartzAI",
      companyIcon: <BiCube className="text-xl" />
    }
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-gray-900 bg-grid-pattern">
      <div className="absolute inset-0 bg-dark/90"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-4 text-white normal-case tracking-tight">
            Our reviews
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-gray-400 text-lg normal-case font-light">
            Hear first-hand from our incredible community of customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-dark-light border border-gray-800 rounded-2xl p-8 lg:p-10 flex flex-col justify-between hover:border-gray-600 transition-colors group"
            >
              <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-10 tracking-tight normal-case">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-white font-bold text-base m-0 tracking-tight normal-case">{review.name}</h4>
                      <BiCheckCircle className="text-white text-sm" />
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5 normal-case font-medium">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors">
                  {review.companyIcon}
                  <span className="font-bold text-sm tracking-tight hidden sm:block">{review.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4.6 FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      icon: <BiHeart className="text-xl" />,
      q: "Is there a free consultation available?",
      a: "Yes, you can schedule a free 30-minute discovery call. Our team will work with you to understand your needs and map out a potential solution."
    },
    {
      icon: <BiTransfer className="text-xl" />,
      q: "Can I scale my team later?",
      a: "Of course. Our resourcing scales with your company. Chat to our team to find a flexible engagement model that works for your current stage."
    },
    {
      icon: <BiBlock className="text-xl" />,
      q: "What is your cancellation policy?",
      a: "We understand that things change. You can pause or cancel your engagement at any time with a standard 30-day notice period."
    },
    {
      icon: <BiFile className="text-xl" />,
      q: "How does intellectual property work?",
      a: "You own 100% of the intellectual property we create for you. All code, design assets, and documentation are transferred to you upon completion."
    },
    {
      icon: <BiReceipt className="text-xl" />,
      q: "How does billing work?",
      a: "We typically operate on a sprint-based retainer or fixed-price milestones depending on the project scope. We invoice transparently every two weeks."
    },
    {
      icon: <BiEnvelope className="text-xl" />,
      q: "How do we communicate?",
      a: "We set up a dedicated Slack channel, Jira board, and weekly syncs. You'll have direct access to the engineers and product managers building your product."
    }
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-gray-900">
      <div className="container-custom relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4 normal-case tracking-tight">
            FAQs
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-gray-400 text-lg md:text-xl font-light max-w-2xl normal-case tracking-normal">
            Everything you need to know about working with us. Can't find the answer you're looking for? Please <Link to="/contact" className="underline hover:text-white transition-colors">chat to our friendly team</Link>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 bg-dark-light border border-gray-800 rounded-xl flex items-center justify-center text-white mb-6">
                {faq.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 normal-case tracking-tight">{faq.q}</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm normal-case tracking-normal pr-4">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-dark-light border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold text-white mb-2 normal-case tracking-tight">Still have questions?</h4>
            <p className="text-gray-400 font-light normal-case tracking-normal">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
          </div>
          <Link to="/contact" className="bg-white hover:bg-gray-200 text-black px-6 py-3.5 rounded-xl font-medium transition-colors whitespace-nowrap text-sm normal-case tracking-normal shadow-sm">
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// 5. Newsletter CTA
const NewsletterCTA = () => (
  <section className="py-24 bg-dark relative overflow-hidden px-4 md:px-8 border-t border-gray-900">
    <div className="container-custom max-w-7xl mx-auto">
      <div className="bg-dark-light rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden border border-gray-800 shadow-2xl">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-[2.8rem] font-bold text-white mb-6 leading-tight normal-case tracking-tight"
          >
            Be the first to know<br />when we launch our new<br />platform
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-md font-light leading-relaxed normal-case tracking-normal"
          >
            We're still building. Subscribe for updates and 20% off when we launch. No spam, we promise!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-4"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-5 py-4 rounded-xl text-white bg-black focus:outline-none focus:ring-1 focus:ring-white border border-gray-800 shadow-sm text-base"
            />
            <button className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-xl font-bold transition-colors shadow-sm whitespace-nowrap text-sm uppercase tracking-widest">
              Subscribe
            </button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 font-light normal-case tracking-normal"
          >
            We care about your data in our <Link to="/privacy" className="underline hover:text-white transition-colors">privacy policy</Link>.
          </motion.p>
        </div>
        
        {/* Right Graphic - Phone Mockup & Floating Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative min-h-[500px] hidden lg:flex justify-end items-center"
        >
          {/* Phone Frame */}
          <div className="w-[280px] xl:w-[320px] h-[600px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl relative overflow-hidden translate-y-24 translate-x-10 z-10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-[20px] z-20 flex justify-center items-center gap-2">
               <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
               <div className="w-10 h-1.5 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* Phone Screen */}
            <div className="w-full h-full bg-dark relative">
               {/* App Header */}
               <div className="pt-12 pb-4 px-6 border-b border-gray-800 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-white"></div>
                   <span className="font-bold text-white tracking-tight">System UI</span>
                 </div>
                 <div className="flex flex-col gap-1 cursor-pointer">
                   <div className="w-4 h-[2px] bg-gray-500 rounded-full"></div>
                   <div className="w-4 h-[2px] bg-gray-500 rounded-full"></div>
                   <div className="w-4 h-[2px] bg-gray-500 rounded-full"></div>
                 </div>
               </div>
               
               {/* App Content */}
               <div className="p-5 bg-black h-full">
                 <div className="bg-dark-light p-4 rounded-xl shadow-sm border border-gray-800 mb-4">
                   <p className="text-xs text-gray-500 font-medium mb-1">Net revenue</p>
                   <div className="flex items-end gap-2 mb-2">
                     <h3 className="text-2xl font-bold text-white leading-none tracking-tight">$8,746.22</h3>
                     <span className="text-[10px] text-black bg-white px-1.5 py-0.5 rounded flex items-center gap-0.5"><BiTrendingUp /> 2.4%</span>
                   </div>
                   <div className="w-full h-12 bg-gradient-to-t from-gray-900 to-transparent mt-4 rounded border-b-2 border-white"></div>
                 </div>
                 <div className="bg-dark-light p-4 rounded-xl shadow-sm border border-gray-800">
                   <p className="text-xs text-gray-500 font-medium mb-1">MRR</p>
                   <div className="flex items-end gap-2">
                     <h3 className="text-2xl font-bold text-white leading-none tracking-tight">$7,804.16</h3>
                     <span className="text-[10px] text-black bg-white px-1.5 py-0.5 rounded flex items-center gap-0.5"><BiTrendingUp /> 2.4%</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Floating Notification Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-[180px] xl:right-[220px] w-[300px] xl:w-[340px] bg-dark-light border border-gray-800 rounded-xl shadow-2xl p-4 flex gap-4 items-center z-30"
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-700">
              <img src="https://i.pravatar.cc/150?img=5" alt="Olivia" className="w-full h-full object-cover opacity-80 grayscale" />
            </div>
            <div>
              <p className="text-[13px] text-gray-300"><span className="text-white font-bold">Olivia Rhye</span> followed you!</p>
              <p className="text-[12px] text-gray-500">@oliviarhye</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[130px] right-[140px] xl:right-[180px] w-[300px] xl:w-[340px] bg-dark-light/90 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-4 flex gap-4 items-center z-30"
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-700">
               <img src="https://i.pravatar.cc/150?img=9" alt="Candice" className="w-full h-full object-cover opacity-80 grayscale" />
            </div>
            <div>
              <p className="text-[13px] text-gray-300"><span className="text-white font-bold">Candice Wu</span> and 2 other gave you kudos on <span className="text-white font-bold">Protocol 101</span> post</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[230px] right-[100px] xl:right-[140px] w-[300px] xl:w-[340px] bg-dark-light/80 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-4 flex gap-4 items-center z-30"
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-700">
               <img src="https://i.pravatar.cc/150?img=11" alt="Phoenix" className="w-full h-full object-cover opacity-80 grayscale" />
            </div>
            <div>
              <p className="text-[13px] text-gray-300"><span className="text-white font-bold">Phoenix Baker</span> joined your team <span className="text-white font-bold">Core Infrastructure</span></p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Hero />
      <TrustedBy />
      <BentoServices />
      <TechnicalPillars />
      <Stats />
      <Testimonials />
      <FAQSection />
      <NewsletterCTA />
    </div>
  );
}
