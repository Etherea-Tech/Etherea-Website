import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-white font-heading mb-6 inline-block tracking-tight">
              Heizen.work
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 font-light leading-relaxed">
              Transforming businesses with innovative digital solutions. Smartly Designed, Perfectly Aligned.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-500 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-500 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ai-machine-learning" className="text-gray-500 hover:text-white transition-colors">AI & ML</Link></li>
              <li><Link to="/services/software-solutions" className="text-gray-500 hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link to="/services/ecommerce" className="text-gray-500 hover:text-white transition-colors">eCommerce</Link></li>
              <li><Link to="/services/ui-ux" className="text-gray-500 hover:text-white transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Heizen.work. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
