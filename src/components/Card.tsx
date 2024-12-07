import React from 'react';
import { useDrag } from 'react-dnd';
import { Card as CardType } from '../types/game';

interface CardProps {
  card: CardType;
  isPlayable?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, isPlayable = true }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: card,
    canDrag: isPlayable,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const getSuitColor = () => {
    return card.suit === 'hearts' || card.suit === 'diamonds' ? 'text-red-600' : 'text-gray-800';
  };

  return (
    <div
      ref={drag}
      className={`
        relative w-16 h-24 bg-white rounded-lg shadow-md border-2 
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isPlayable ? 'cursor-pointer hover:shadow-lg transform hover:-translate-y-1' : 'cursor-default'}
      `}
    >
      <div className={`p-2 text-sm font-bold ${getSuitColor()}`}>
        <div>{card.value}</div>
        <div>{card.suit}</div>
      </div>
    </div>
  );
};