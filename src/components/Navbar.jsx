import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-soft border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/assests/logo 2.jpg"
              alt="Hope Christian Foundation logo"
              className="h-12 md:h-14 w-auto object-contain shrink-0"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Hope Christian Foundation
              </h1>
              <p className="text-xs text-dark-500 -mt-1">Christian Foundation Uganda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 rounded-lg text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-3 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-md font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-medium"
            >
              <span className="text-sm">Donate</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-600 hover:text-primary-600 transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-large border border-primary-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block mt-4 mx-3 px-3 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-md font-medium text-sm text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}