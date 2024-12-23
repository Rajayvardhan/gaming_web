import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

export const AboutBanner: React.FC = () => {
  return (
    <div>
      {/* Games Banner */}
      <div
        className="relative bg-primary text-white bg-cover py-16 bg-center sm:px-4 lg:px-8 sm:before:flex-1"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-center md:text-left">
              Get Ready to Win Real Money! Get Rummy World Right Now!
            </h1>

            <div className="flex justify-center">
              <img
                src="/mobile.png"
                alt="Mobile App"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};