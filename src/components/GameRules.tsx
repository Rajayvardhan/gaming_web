import React from 'react';

interface GameRulesProps {
  rules: string[];
}

export const GameRules: React.FC<GameRulesProps> = ({ rules }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ol className="list-decimal pl-5 space-y-4">
          {rules.map((rule, index) => (
            <li key={index} className="text-gray-700">{rule}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};