import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experience the Thrill of Online Gaming
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Play your favorite games with millions of players
          </p>
          <Link
            to="/games"
            className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors"
          >
            Play Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};