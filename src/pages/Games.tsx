import React from 'react';
import { games } from '../data/games';
import { GameCard } from '../components/GameCard';
import { Search, Filter } from 'lucide-react';

export const Games: React.FC = () => {
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

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Game Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Game Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Games</h3>
              <p className="text-gray-600 mb-4">Perfect for players who enjoy fast-paced action with instant results.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Points Rummy</li>
                <li>Best of Three</li>
                <li>Sprint Rummy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tournament Games</h3>
              <p className="text-gray-600 mb-4">Compete in tournaments with bigger prize pools and multiple players.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Pool Rummy</li>
                <li>Tournament Deals</li>
                <li>Championship Games</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Practice Games</h3>
              <p className="text-gray-600 mb-4">Hone your skills without risking real money.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Free Practice</li>
                <li>Bot Games</li>
                <li>Tutorial Modes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};