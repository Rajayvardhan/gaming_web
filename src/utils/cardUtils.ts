import { Card } from '../types/game';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const generateDeck = (): Card[] => {
  const deck: Card[] = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({
        suit,
        value,
        id: `${suit}-${value}`,
      });
    });
  });
  return shuffle(deck);
};

const shuffle = (array: Card[]): Card[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};