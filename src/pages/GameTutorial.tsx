import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../data/games';
import { AlertTriangle, PlayCircle } from 'lucide-react';
import { GameOverview } from '../components/GameOverview';
import { GameRules } from '../components/GameRules';
import { MoneyManagement } from '../components/MoneyManagement';
import { GameTips } from '../components/GameTips';

export const GameTutorial: React.FC = () => {
  const { gameId } = useParams();
  const game = games.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Game Not Found</h1>
          <p className="text-gray-600">The game you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{game.name}</h1>
        
        <div className="prose max-w-none">
          <GameOverview {...game} />
          <GameRules rules={game.rules} />
          <MoneyManagement />

          {/* Video Tutorial Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <PlayCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Watch and Learn</h3>
              <p className="text-gray-700 mb-4">
                Master {game.name} with our comprehensive video tutorial covering rules,
                strategies, and pro tips.
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500">Video tutorial coming soon</p>
                </div>
              </div>
            </div>
          </section>

          <GameTips gameType={game.id.split('-')[0] as 'points' | 'pool' | 'deals'} />

          {/* Important Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <AlertTriangle className="text-yellow-600 mb-4" size={24} />
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Ensure stable internet connection while playing</li>
                <li>Complete KYC verification before making withdrawals</li>
                <li>Follow fair play policy to avoid account suspension</li>
                <li>Contact 24/7 support for any assistance</li>
                <li>Practice responsible gaming and set daily limits</li>
                <li>Keep your account credentials secure</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};