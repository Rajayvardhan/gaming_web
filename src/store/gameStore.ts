import { create } from 'zustand';
import { GameState, Card, Player } from '../types/game';
import { generateDeck } from '../utils/cardUtils';

interface GameStore extends GameState {
  initializeGame: (players: string[]) => void;
  drawCard: (playerId: string) => void;
  discardCard: (playerId: string, cardId: string) => void;
  declareRummy: (playerId: string) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  players: [],
  currentPlayer: '',
  deck: [],
  discardPile: [],
  gameStatus: 'waiting',

  initializeGame: (playerNames) => {
    const deck = generateDeck();
    const players: Player[] = playerNames.map((name, index) => ({
      id: `player-${index}`,
      name,
      cards: deck.splice(0, 13),
      points: 0,
    }));

    set({
      players,
      deck,
      currentPlayer: players[0].id,
      discardPile: [deck.pop()!],
      gameStatus: 'playing',
    });
  },

  drawCard: (playerId) => {
    set((state) => {
      const deck = [...state.deck];
      const card = deck.pop();
      if (!card) return state;

      const players = state.players.map((player) =>
        player.id === playerId
          ? { ...player, cards: [...player.cards, card] }
          : player
      );

      return { ...state, deck, players };
    });
  },

  discardCard: (playerId, cardId) => {
    set((state) => {
      const player = state.players.find((p) => p.id === playerId);
      if (!player) return state;

      const cardIndex = player.cards.findIndex((c) => c.id === cardId);
      if (cardIndex === -1) return state;

      const card = player.cards[cardIndex];
      const players = state.players.map((p) =>
        p.id === playerId
          ? {
              ...p,
              cards: p.cards.filter((c) => c.id !== cardId),
            }
          : p
      );

      return {
        ...state,
        players,
        discardPile: [...state.discardPile, card],
        currentPlayer:
          state.players[(state.players.findIndex((p) => p.id === playerId) + 1) % state.players.length].id,
      };
    });
  },

  declareRummy: (playerId) => {
    set((state) => ({
      ...state,
      gameStatus: 'finished',
    }));
  },
}));