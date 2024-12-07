import React from 'react';
import { Lightbulb } from 'lucide-react';

interface GameTipsProps {
  gameType: 'points' | 'pool' | 'deals';
}

export const GameTips: React.FC<GameTipsProps> = ({ gameType }) => {
  const getTips = () => {
    switch (gameType) {
      case 'points':
        return [
          'Start with lower point value games to practice',
          'Focus on creating pure sequences first',
          'Keep track of discarded cards',
          'Drop early if your initial cards are weak',
          'Practice money management - start small'
        ];
      case 'pool':
        return [
          'Maintain at least one pure sequence at all times',
          'Calculate risks before dropping games',
          'Watch your points carefully',
          'Use middle drop strategically',
          'Study opponents playing patterns'
        ];
      case 'deals':
        return [
          'Plan your strategy across multiple deals',
          'Keep track of points across all rounds',
          'Focus on winning maximum deals',
          'Use your jokers wisely',
          'Stay patient and avoid rushed decisions'
        ];
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Pro Tips & Strategies</h2>
      <div className="bg-blue-50 p-6 rounded-lg">
        <Lightbulb className="text-blue-600 mb-4" size={24} />
        <ul className="list-disc pl-5 space-y-3">
          {getTips().map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};