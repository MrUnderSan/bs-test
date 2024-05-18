import { Game } from '../games';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppInitialStateType = {
  status: RequestStatusType;
  error: string | null;
  games: Game[];
  displayedGames: Game[];
  gameTypes: string[];
  currentGameType: string;
  currentSearchGames: string;
};
