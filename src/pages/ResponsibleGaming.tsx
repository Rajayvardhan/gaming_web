import React from 'react';
import { AlertTriangle, Clock, Shield, Ban } from 'lucide-react';

export const ResponsibleGaming: React.FC = () => {
  return (
    
    <div className="">
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
        {/* <Link  
              to="/games"  
              className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors"  
            >  
              Play Now  
              <ArrowRight className="ml-2" size={20} />  
            </Link> */}
      </div>
    </div>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Play Responsibly</h1>
          <p className="text-xl text-gray-600">
            We are committed to promoting responsible gaming practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 p-6 rounded-lg">
            <AlertTriangle className="text-red-600 mb-4" size={32} />
            <h2 className="text-xl font-bold mb-2">Warning Signs</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Spending more time and money than you can afford</li>
              <li>• Chasing losses with bigger bets</li>
              <li>• Neglecting work or personal responsibilities</li>
              <li>• Borrowing money to play</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <Shield className="text-green-600 mb-4" size={32} />
            <h2 className="text-xl font-bold mb-2">Responsible Gaming Tools</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Set deposit limits</li>
              <li>• Self-exclusion options</li>
              <li>• Time management tools</li>
              <li>• Reality check reminders</li>
            </ul>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are dedicated to providing a safe and responsible gaming environment. Our platform
            includes various tools and features to help players maintain control over their gaming
            habits.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Clock className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Time Limits</h3>
              <p className="text-sm">Set daily time limits for your gaming sessions</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Ban className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Self-Exclusion</h3>
              <p className="text-sm">Take a break from gaming when needed</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold mb-2">Deposit Limits</h3>
              <p className="text-sm">Control your spending with deposit limits</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              If you or someone you know is struggling with gaming addiction, please reach out for help:
            </p>
            <ul className="space-y-2">
              <li>• 24/7 Helpline: 1800-XXX-XXXX</li>
              <li>• Email: support@rummycircle.com</li>
              <li>• Chat with our responsible gaming team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};