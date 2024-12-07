import { Game } from '../types/games';

export const games: Game[] = [
  {
    id: 'points-rummy',
    name: 'Points Rummy',
    description: 'Quick single-round game where players play for points that have a pre-decided rupee value. Perfect for players who enjoy fast-paced games.',
    imageUrl: 'https://images.unsplash.com/photo-1593695736984-446fb9d015c7',
    minPlayers: 2,
    maxPlayers: 6,
    entryFee: '₹5 - ₹10,000',
    prizePool: 'Based on points value',
    rules: [
      'Game ends in a single deal - quick and exciting gameplay',
      'Each point has a pre-decided rupee value (e.g., ₹1, ₹2, ₹5, etc.)',
      'Players must arrange all 13 cards into valid sequences and sets',
      'At least 2 sequences are required, one of which must be pure sequence',
      'First player to make valid declaration wins the game',
      'Losing players pay points based on unmatched cards',
      'Points are converted to real money based on point value'
    ]
  },
  {
    id: 'pool-rummy',
    name: 'Pool Rummy',
    description: 'Strategic multi-round format where players start with fixed points (101/201). Get eliminated when points reach zero. Last player standing wins the pool.',
    imageUrl: 'https://images.unsplash.com/photo-1596568359553-a56de6970068',
    minPlayers: 2,
    maxPlayers: 6,
    entryFee: '₹25 - ₹5,000',
    prizePool: 'Pool amount',
    rules: [
      'Choose between 101 pool or 201 pool variants',
      'All players start with same points (101 or 201)',
      'Points are deducted based on unmatched cards after each game',
      'Players must maintain at least one pure sequence',
      'Getting eliminated when points reach zero',
      'Middle drop: 20 points penalty',
      'First drop: 10 points penalty',
      'Last player with points wins the pool amount'
    ]
  },
  {
    id: 'deals-rummy',
    name: 'Deals Rummy',
    description: 'Fixed number of deals where players compete across multiple rounds. Points are accumulated, and this is most loved game the player with highest points wins.',
    imageUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d',
    minPlayers: 2,
    maxPlayers: 6,
    entryFee: '₹50 - ₹2,000',
    prizePool: 'Based on entry fee',
    rules: [
      'Play fixed number of deals (2, 3, or 6 deals)',
      'Points accumulated across all deals',
      'Each deal follows standard rummy rules',
      'Must have at least one pure sequence',
      'Points calculated based on unmatched cards',
      'Highest points winner after all deals',
      'Multiple winners possible based on tournament structure'
    ]
  }
];