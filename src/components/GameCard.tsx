import React from 'react';
import { Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../types/games';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{game.name}</h3>
        <p className="text-gray-600 mb-4">{game.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Users size={20} style={{ color: '#872E68' }} className="mr-2" />
            <span>{game.minPlayers}-{game.maxPlayers} Players</span>
          </div>
          <div className="flex items-center">
            <Trophy size={20} style={{ color: '#872E68' }} className="mr-2" />
            <span>{game.prizePool}</span>
          </div>
        </div>

        <Link 
          to={`/game/${game.id}`}
          className="block w-full  bg-secondary text-white py-2 text-center rounded-md transition-colors"
        >
          Learn How to Play
        </Link>
      </div>
    </div>
  );
};
