import { RootState } from '../store';

export const gamesSelector = (state: RootState) => state.app.displayedGames;
export const statusSelector = (state: RootState) => state.app.status;
export const errorSelector = (state: RootState) => state.app.error;
export const gameTypesSelector = (state: RootState) => state.app.gameTypes;
export const currentGameTypeSelector = (state: RootState) =>
  state.app.currentGameType;
export const currentSearchGamesSelector = (state: RootState) =>
  state.app.currentSearchGames;
