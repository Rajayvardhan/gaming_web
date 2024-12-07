import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PlayerHand } from './PlayerHand';
import { Card } from './Card';
import { useGameStore } from '../store/gameStore';

export const GameBoard: React.FC = () => {
  const { players, currentPlayer, discardPile, gameStatus } = useGameStore();
  const drawCard = useGameStore((state) => state.drawCard);

  if (gameStatus === 'waiting') {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => useGameStore.getState().initializeGame(['Player 1', 'Player 2'])}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-green-800 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Rummy Circle</h1>
            <p className="text-xl">Current Player: {players.find(p => p.id === currentPlayer)?.name}</p>
          </div>

          <div className="bg-green-700 rounded-lg p-6 mb-8">
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <p className="text-white mb-2">Deck</p>
                <div
                  onClick={() => drawCard(currentPlayer)}
                  className="w-16 h-24 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                />
              </div>
              <div className="text-center">
                <p className="text-white mb-2">Discard Pile</p>
                {discardPile.length > 0 && (
                  <Card card={discardPile[discardPile.length - 1]} isPlayable={false} />
                )}
              </div>
            </div>
          </div>

          {players.map((player) => (
            <div key={player.id} className="mb-8 bg-green-600 rounded-lg p-4">
              <h2 className="text-white text-xl mb-4">{player.name}'s Hand</h2>
              <PlayerHand
                playerId={player.id}
                cards={player.cards}
                isCurrentPlayer={player.id === currentPlayer}
              />
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};