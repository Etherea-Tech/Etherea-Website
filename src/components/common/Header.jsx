import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gray-900">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white font-heading tracking-tight">
          Heizen.work
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Home</Link>
          <Link to="/services" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Services</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">About</Link>
          <Link to="/team" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Team</Link>
          <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">Portfolio</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            Get Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
