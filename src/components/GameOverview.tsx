import React from 'react';
import { Users, DollarSign, Trophy } from 'lucide-react';

interface GameOverviewProps {
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  entryFee: string;
  prizePool: string;
}

export const GameOverview: React.FC<GameOverviewProps> = ({
  name,
  description,
  minPlayers,
  maxPlayers,
  entryFee,
  prizePool,
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Game Overview</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <Users className="text-blue-600 mb-2" size={24} />
          <h3 className="font-semibold mb-1">Players</h3>
          <p>{minPlayers} - {maxPlayers} players</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <DollarSign className="text-green-600 mb-2" size={24} />
          <h3 className="font-semibold mb-1">Entry Fee</h3>
          <p>{entryFee}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <Trophy className="text-purple-600 mb-2" size={24} />
          <h3 className="font-semibold mb-1">Prize Pool</h3>
          <p>{prizePool}</p>
        </div>
      </div>
    </section>
  );
};