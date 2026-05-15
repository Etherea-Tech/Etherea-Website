import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { 
  BiChevronDown, BiChevronUp, BiRightArrowAlt, 
  BiBrain, BiBarChart, BiCloud, BiCodeAlt, BiCart, 
  BiPalette, BiMobile, BiWindow, BiCheckShield, BiTrendingUp
} from 'react-icons/bi';

const IconMap = {
  BiBrain, BiBarChart, BiCloud, BiCodeAlt, BiCart,
  BiPalette, BiMobile, BiWindow, BiCheckShield, BiTrendingUp
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServiceDetailTemplate({ service }) {
  if (!service) return <div className="py-20 text-center text-white">Service not found.</div>;

  const Icon = IconMap[service.icon];
  const [expandedSubService, setExpandedSubService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: `What makes your ${service.title} services different?`, a: "We blend deep industry expertise with cutting-edge technology to deliver scalable, secure, and future-proof solutions." },
    { q: "How long does a typical project take?", a: "Project timelines vary based on complexity, but we follow agile methodologies to deliver functional MVPs in as little as 4-8 weeks." },
    { q: "Do you provide ongoing support?", a: "Absolutely. We offer comprehensive maintenance and 24/7 support SLAs to ensure your systems remain optimal post-launch." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="bg-dark">
      <SEO title={service.title} description={service.shortDescription} />
      
      {/* 1. Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${service.bgGradient} text-white`}>
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-4xl border border-white/20">
                {Icon && <Icon />}
              </div>
              <h1 className="text-white text-4xl md:text-5xl tracking-tight">{service.title}</h1>
            </div>
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-4">{service.tagline}</p>
            <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">{service.fullDescription || service.shortDescription}</p>
            <Link to="/contact" className="btn-primary bg-white text-black hover:bg-gray-200 py-4 px-8 shadow-xl">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="section-padding bg-dark border-t border-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white">What We Offer</h2>
            <p className="text-gray-400 font-light">Comprehensive capabilities under {service.title}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {service.subServices.map((sub, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-dark-light rounded-2xl shadow-sm border border-gray-900 p-8 hover:border-gray-700 transition-colors cursor-pointer"
                onClick={() => setExpandedSubService(expandedSubService === idx ? null : idx)}
              >
                <h3 className="text-xl font-bold mb-3 text-white">{sub.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light leading-relaxed">{sub.description}</p>
                
                <AnimatePresence>
                  {expandedSubService === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-gray-800 pt-4 mt-4"
                    >
                      <h4 className="text-sm font-bold text-white mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mb-4 font-light">
                        {sub.features?.map((feat, i) => <li key={i}>{feat}</li>)}
                      </ul>
                      <h4 className="text-sm font-bold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {sub.technologies?.map((tech, i) => (
                          <span key={i} className="text-xs font-medium bg-gray-900 px-3 py-1.5 rounded-full text-gray-300 border border-gray-800">{tech}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button className="mt-6 flex items-center text-sm font-bold text-white group-hover:text-gray-300">
                  {expandedSubService === idx ? 'Show Less' : 'Explore Details'}
                  {expandedSubService === idx ? <BiChevronUp className="ml-1 text-lg" /> : <BiChevronDown className="ml-1 text-lg" />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Process */}
      <section className="section-padding bg-dark-light border-y border-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white">Our Process</h2>
            <p className="text-gray-400 font-light">How we turn ideas into reality</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-900 -z-10 -translate-y-1/2"></div>
            {['Discovery & Audit', 'Strategy & Design', 'Agile Development', 'Testing & Launch', 'Support & Scaling'].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex flex-row md:flex-col items-center mb-8 md:mb-0 w-full md:w-auto relative"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-0 md:mb-6 shrink-0 border border-gray-200">
                  {idx + 1}
                </div>
                <div className="ml-6 md:ml-0 md:text-center">
                  <h4 className="font-bold text-white tracking-wide">{step}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Case Studies */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="section-padding bg-dark text-white">
          <div className="container-custom">
            <h2 className="mb-12 text-center text-white">Featured Success Story</h2>
            <div className="bg-dark-light rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-900">
              <div className="w-full md:w-1/2 bg-black min-h-[350px] flex items-center justify-center relative overflow-hidden">
                 <div className={`absolute inset-0 bg-gradient-to-tr ${service.bgGradient} opacity-30`}></div>
                 <Icon className="text-9xl text-white/5" />
              </div>
              <div className="p-10 md:p-16 w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-gray-400 font-bold tracking-widest uppercase mb-3 text-sm">Client: {service.caseStudies[0].client}</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">{service.caseStudies[0].title}</h3>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-xl font-medium text-white leading-relaxed">🏆 {service.caseStudies[0].result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ */}
      <section className="section-padding bg-dark border-t border-gray-900">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-dark-light rounded-2xl border border-gray-900 overflow-hidden hover:border-gray-800 transition-colors">
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between font-bold text-white hover:text-gray-300 transition-colors text-left"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  {faq.q}
                  {activeFaq === idx ? <BiChevronUp className="text-xl text-gray-400" /> : <BiChevronDown className="text-xl text-gray-500" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="px-8 pb-8 text-gray-400 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
