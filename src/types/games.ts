export interface Game {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  minPlayers: number;
  maxPlayers: number;
  entryFee: string;
  prizePool: string;
  rules: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}