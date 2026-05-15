import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-gray-900 pt-20 pb-8">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Left Area: Logo & Description */}
          <div className="lg:col-span-2">
              {/* Logo and Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                    <span className="text-black font-bold text-xl leading-none">E</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Etherea Tech</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 font-light mb-8 leading-relaxed max-w-sm">
                Design amazing digital experiences that create more happy in the world.
              </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-6 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Help</Link></li>
              <li><Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-6 tracking-wider uppercase">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/ai-machine-learning" className="text-sm text-gray-400 hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services/software-solutions" className="text-sm text-gray-400 hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link to="/services/ecommerce" className="text-sm text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="/services/ui-ux" className="text-sm text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-sm text-white hover:text-gray-300 font-medium transition-colors">All Services &rarr;</Link></li>
            </ul>
          </div>
          
          {/* Right Area: Newsletter */}
          <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-6 tracking-wider uppercase">Subscribe</h4>
              <p className="text-sm text-gray-400 mb-4">Stay up to date with our latest news.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#050505] border border-gray-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 w-full transition-colors" 
                />
                <button 
                  type="submit" 
                  className="bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full"
                >
                  Subscribe
                </button>
              </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Etherea Tech. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FaGithub className="text-lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <FaDribbble className="text-lg" />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
