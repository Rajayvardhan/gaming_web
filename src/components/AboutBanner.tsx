import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

export const AboutBanner: React.FC = () => {
  return (
    <div className=" bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">About Finunique GameZone</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            India's most trusted gaming platform offering secure, fair, and entertaining card games
            with exciting cash prizes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users size={32}  />
            </div>
            <h3 className="text-xl font-semibold mb-2">1k Players</h3>
            <p className="text-blue-200">Active gaming community</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
            <p className="text-blue-200">RNG certified platform</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-200">Always here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};