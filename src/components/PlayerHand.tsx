import React from 'react';
import { Card } from './Card';
import { Card as CardType } from '../types/game';
import { useGameStore } from '../store/gameStore';

interface PlayerHandProps {
  playerId: string;
  cards: CardType[];
  isCurrentPlayer: boolean;
}

export const PlayerHand: React.FC<PlayerHandProps> = ({ playerId, cards, isCurrentPlayer }) => {
  const discardCard = useGameStore((state) => state.discardCard);

  const handleCardClick = (cardId: string) => {
    if (isCurrentPlayer) {
      discardCard(playerId, cardId);
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 flex-wrap">
        {cards.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.id)}>
            <Card card={card} isPlayable={isCurrentPlayer} />
          </div>
        ))}
      </div>
    </div>
  );
};