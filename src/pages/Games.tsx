import React from 'react';
import { games } from '../data/games';
import { GameCard } from '../components/GameCard';
import { Search, Filter } from 'lucide-react';

export const Games: React.FC = () => {
  return (
    <div>
      {/* Games Banner */}
      <div className=" bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 mt-12 text-center">Our Games Collection</h1>
          <p className="text-xl text-center text-blue-200 mb-8">
            Discover a world of exciting card games with real cash prizes
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 pl-10"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
            </div>
            <button className=" bg-secondary px-4 py-2 rounded-lg flex items-center gap-2">
              <Filter size={20} />
              Filter
            </button>
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