import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BiBrain, BiBarChartAlt2, BiCloud, BiCodeAlt, BiCart, 
  BiPalette, BiMobile, BiGlobe, BiCheckShield, BiTrendingUp 
} from 'react-icons/bi';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesMenu = [
    { name: 'AI & Machine Learning', desc: 'Intelligent automation & modeling', path: '/services/ai-machine-learning', icon: BiBrain },
    { name: 'Data Analytics', desc: 'Actionable data insights', path: '/services/data-analytics', icon: BiBarChartAlt2 },
    { name: 'SaaS Products', desc: 'Scalable cloud tools', path: '/services/saas-products', icon: BiCloud },
    { name: 'Software Solutions', desc: 'Custom enterprise software', path: '/services/software-solutions', icon: BiCodeAlt },
    { name: 'E-commerce', desc: 'Digital storefronts', path: '/services/ecommerce', icon: BiCart },
    { name: 'UI/UX Design', desc: 'Intuitive user interfaces', path: '/services/ui-ux', icon: BiPalette },
    { name: 'Mobile Apps', desc: 'iOS & Android solutions', path: '/services/mobile-apps', icon: BiMobile },
    { name: 'Web Development', desc: 'High-performance sites', path: '/services/web-development', icon: BiGlobe },
    { name: 'QA & Testing', desc: 'Reliable software delivery', path: '/services/qa-testing', icon: BiCheckShield },
    { name: 'Digital Marketing', desc: 'Brand growth & visibility', path: '/services/digital-marketing', icon: BiTrendingUp },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gray-900">
      <div className="container-custom py-4 flex items-center justify-between relative">
        <Link to="/" className="text-2xl font-bold text-white font-heading tracking-tight">
          Etherea Tech
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Home</Link>
          
          <div 
            className="relative py-4"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase flex items-center gap-1">
              Services
              <svg className="w-4 h-4 transition-transform" style={{ transform: activeMenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            
            <AnimatePresence>
              {activeMenu === 'services' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[700px] bg-[#050505] border border-gray-800 shadow-2xl shadow-black/80 rounded-2xl overflow-hidden z-50 p-6"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-4 pl-3">Core Capabilities</h3>
                      <div className="flex flex-col space-y-1">
                        {servicesMenu.slice(0, 5).map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-800 bg-[#0a0a0a] flex items-center justify-center shrink-0 group-hover/item:border-gray-600 transition-colors">
                              <item.icon className="text-xl text-gray-400 group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-200 group-hover/item:text-white mb-0.5">{item.name}</h4>
                              <p className="text-xs text-gray-500 group-hover/item:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Column 2 */}
                    <div>
                      <h3 className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-4 pl-3">Digital Services</h3>
                      <div className="flex flex-col space-y-1">
                        {servicesMenu.slice(5, 10).map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="w-10 h-10 rounded-lg border border-gray-800 bg-[#0a0a0a] flex items-center justify-center shrink-0 group-hover/item:border-gray-600 transition-colors">
                              <item.icon className="text-xl text-gray-400 group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-200 group-hover/item:text-white mb-0.5">{item.name}</h4>
                              <p className="text-xs text-gray-500 group-hover/item:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Action Bar */}
                  <div className="mt-6 pt-4 border-t border-gray-900 flex justify-between items-center px-3">
                    <Link to="/services" className="text-sm text-gray-400 hover:text-white font-medium flex items-center gap-2 transition-colors">
                      View all services
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">About</Link>
          <Link to="/team" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Team</Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Portfolio</Link>
          <a href="/#contact-section" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Contact Us</a>
        </nav>
        
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            Get Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#050505] border-b border-gray-900 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 container-custom">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">Home</Link>
              
              <div className="flex flex-col space-y-3">
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">Services</Link>
                <div className="pl-2 flex flex-col space-y-1">
                  {servicesMenu.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={item.path} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <item.icon className="text-lg" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">About</Link>
              <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">Team</Link>
              <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">Portfolio</Link>
              <a href="/#contact-section" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium uppercase">Contact Us</a>
              
              <div className="pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary py-3 px-6 text-sm text-center block w-full">
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
