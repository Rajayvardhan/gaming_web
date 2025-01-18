import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import img1 from "./FINUNIQUE LOGO.png"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src={img1} 
              alt="Finunique Logo" 
              className="h-20 w-auto mb-4"
            />
            <div className="text-gray-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>P.NO 97, Dakshinpuri Shri Kishanpura, Opposite to Somya Sky Apartments, Jagatpura, Jaipur, Rajasthan - 302017</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:Info@finunique.in" className="hover:text-white">support@rummycircle.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:7297026119" className="hover:text-white">9660339514</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/games" className="text-gray-300 hover:text-white">Games</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/responsible-gaming" className="text-gray-300 hover:text-white">Responsible Gaming</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refunds" className="text-gray-300 hover:text-white">Refund </Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Finunique small pvt ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
