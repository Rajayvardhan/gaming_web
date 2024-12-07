import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-primary text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://rummyworld.online/assets/images/backgrounds/bg.webp')",
        height:"70vh"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
          
          </p>
         
        </div>
      </div>
    </div>
  );
};
