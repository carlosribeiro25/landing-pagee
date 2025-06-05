import React, { useState, useEffect } from 'react';
import { Menu, X,  } from 'lucide-react';
import logo from '../assets/logo.avif'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-100" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8  ">
            {['Home', 'Courses', 'About', 'Teachers', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-xl font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? 'text-yellow-300' : 'text-black'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-500 transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {['Home', 'Courses', 'About', 'Teachers', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-base font-medium text-gray-800 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <button className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-600 rounded-md transition-colors">
                Log in
              </button>
              <button className="w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;