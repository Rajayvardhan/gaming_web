import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import img1 from './FINUNIQUE LOGO.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary text-white shadow-lg' : 'bg-transparent text-white'
      }`}
      style={{
        backdropFilter: isScrolled ? 'none' : 'blur(10px)', // Blur only when not scrolled
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={img1} 
              alt="Finunique Logo" 
              className="h-20 w-auto"
            />
          </Link>

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

          <div className="md:hidden">
            <button className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
