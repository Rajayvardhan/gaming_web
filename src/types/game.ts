export type Card = {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  id: string;
};

export type Player = {
  id: string;
  name: string;
  cards: Card[];
  points: number;
};

export type GameState = {
  players: Player[];
  currentPlayer: string;
  deck: Card[];
  discardPile: Card[];
  gameStatus: 'waiting' | 'playing' | 'finished';
};