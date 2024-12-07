import React from 'react';
import { AboutBanner } from '../components/AboutBanner';
import { Shield, Award, Users, Clock, Target, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      <AboutBanner />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded with a vision to revolutionize online gaming in India, Finunique GameZone
                    has grown to become one of the most trusted platforms for card game enthusiasts.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our commitment to providing a secure, fair, and entertaining gaming experience
                    has helped us build a community of over 1 million active players.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">1M+</h3>
                    <p>Active Players</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <h3 className="text-3xl font-bold text-green-600 mb-2">₹10Cr+</h3>
                    <p>Weekly Prizes</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
                    <p>Support</p>
                  </div>
                  <div className="text-center p-6 bg-yellow-50 rounded-lg">
                    <h3 className="text-3xl font-bold text-yellow-600 mb-2">100%</h3>
                    <p>Secure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <Shield className="mx-auto mb-4 text-blue-600" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
                  <p className="text-gray-600">
                    We prioritize player security with state-of-the-art encryption and fair play mechanisms.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <Target className="mx-auto mb-4 text-green-600" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Continuously improving our platform with cutting-edge technology and features.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <Trophy className="mx-auto mb-4 text-purple-600" size={40} />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Committed to providing the best gaming experience for our players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};