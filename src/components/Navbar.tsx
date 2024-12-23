import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import img1 from './FINUNIQUE LOGO.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary text-white shadow-lg' : 'bg-transparent text-white'
      }`}
      style={{
        backdropFilter: isScrolled ? 'none' : 'blur(10px)', 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={img1} 
              alt="Finunique Logo" 
              className="h-20 w-auto py-2"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/games" 
                className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
              >
                Games
              </Link>
              <Link 
                to="/about" 
                className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
              >
                About
              </Link>
              <Link 
                to="/responsible-gaming" 
                className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
              >
                Responsible Gaming
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white px-4 py-2">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={toggleMenu} 
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/games" 
              onClick={toggleMenu} 
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
            >
              Games
            </Link>
            <Link 
              to="/about" 
              onClick={toggleMenu} 
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
            >
              About
            </Link>
            <Link 
              to="/responsible-gaming" 
              onClick={toggleMenu} 
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md transition-colors"
            >
              Responsible Gaming
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
