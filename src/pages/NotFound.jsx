import React from 'react';
import { motion } from 'framer-motion';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden bg-dot-pattern pt-20 pb-20">
      <SEO title="404 - Page Not Found" description="The page you are looking for doesn't exist." />
      
      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="w-full md:w-1/2">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-4">
              404 error
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Under maintenance
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 text-lg mb-8 font-light leading-relaxed max-w-md">
              Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                <input 
                  type="text" 
                  placeholder="Search our site" 
                  className="w-full bg-black border border-gray-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-white transition-colors text-sm"
                />
              </div>
              <button className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm shadow-sm whitespace-nowrap">
                Search
              </button>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              {/* Geometric 404 SVG mimicking the image */}
              <svg viewBox="0 0 400 150" className="w-full max-w-lg opacity-60">
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="#4b5563" strokeWidth="1" />
                <line x1="0" y1="130" x2="400" y2="130" stroke="#4b5563" strokeWidth="1" />
                
                {/* First 4 */}
                <circle cx="80" cy="50" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="40" cy="90" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="80" cy="110" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="120" cy="90" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                
                <line x1="70" y1="60" x2="50" y2="80" stroke="#9ca3af" strokeWidth="2" />
                <line x1="55" y1="90" x2="105" y2="90" stroke="#9ca3af" strokeWidth="2" />
                <line x1="80" y1="65" x2="80" y2="95" stroke="#9ca3af" strokeWidth="2" />
                
                {/* 0 */}
                <circle cx="200" cy="75" r="45" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="200" cy="75" r="25" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="200" cy="30" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="200" cy="120" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="155" cy="75" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="245" cy="75" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                
                {/* Second 4 */}
                <circle cx="320" cy="50" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="280" cy="90" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="320" cy="110" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="360" cy="90" r="15" fill="none" stroke="#9ca3af" strokeWidth="2" />
                
                <line x1="310" y1="60" x2="290" y2="80" stroke="#9ca3af" strokeWidth="2" />
                <line x1="295" y1="90" x2="345" y2="90" stroke="#9ca3af" strokeWidth="2" />
                <line x1="320" y1="65" x2="320" y2="95" stroke="#9ca3af" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
