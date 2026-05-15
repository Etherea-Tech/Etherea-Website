import React from 'react';
import { motion } from 'framer-motion';
import { BiLinkExternal, BiGlobe, BiEnvelope } from 'react-icons/bi';
import SEO from '../components/common/SEO';

const teamMembers = [
  {
    name: 'Alisa Hester',
    role: 'Founder & CEO',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    social: ['x', 'linkedin', 'dribbble']
  },
  {
    name: 'Rich Wilson',
    role: 'Engineering Manager',
    description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop',
    social: ['x', 'linkedin', 'dribbble']
  },
  {
    name: 'Annie Stanley',
    role: 'Product Manager',
    description: 'Former PM for Airtable, Medium, Ghost, and Lumi.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    social: ['x', 'linkedin', 'dribbble']
  }
];

export default function Team() {
  return (
    <div className="bg-dark min-h-screen pt-32 pb-24 border-b border-gray-900 bg-dot-pattern">
      <SEO title="Meet Our Team" description="We are hiring! Meet the team behind the magic." />
      
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-300 font-bold tracking-widest uppercase text-sm mb-4">
            We're hiring!
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight normal-case">
            Meet our team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10 normal-case tracking-normal">
            Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-secondary normal-case tracking-normal font-medium py-3 rounded-lg shadow-sm border border-gray-700 bg-dark-light hover:bg-white hover:text-black hover:border-white">Read our principles</button>
            <button className="btn-primary normal-case tracking-normal font-medium py-3 rounded-lg shadow-sm bg-white text-black hover:bg-gray-200 hover:-translate-y-0">We're hiring!</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (idx * 0.1) }}
              className="relative rounded-2xl overflow-hidden h-[500px] group border border-gray-800"
            >
              <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-dark-light/80 backdrop-blur-md border border-gray-700 p-6 rounded-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-white tracking-tight normal-case">{member.name}</h3>
                  <BiLinkExternal className="text-white text-lg transition-transform hover:scale-110 cursor-pointer" />
                </div>
                <p className="text-white text-sm font-medium mb-3 normal-case tracking-normal">{member.role}</p>
                <p className="text-gray-300 text-sm font-light mb-6 leading-relaxed normal-case tracking-normal">
                  {member.description}
                </p>
                
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors text-white text-xs">𝕏</div>
                   <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors text-white text-xs">in</div>
                   <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors text-white text-xs">🏀</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
