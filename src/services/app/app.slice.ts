import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, gamesService } from '../games';
import { AppInitialStateType } from './app.types';

const initialState: AppInitialStateType = {
  status: 'idle',
  error: null,
  games: [],
  displayedGames: [],
  gameTypes: ['All'],
  currentGameType: 'All',
  currentSearchGames: '',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCurrentGameType: (
      state,
      action: PayloadAction<{ gameTypes: string }>,
    ) => {
      state.currentGameType = action.payload.gameTypes;
    },
    changeCurrentSearchGames: (
      state,
      action: PayloadAction<{ searchGames: string }>,
    ) => {
      state.currentSearchGames = action.payload.searchGames;
    },
    filterGames: state => {
      const { currentGameType, currentSearchGames, games } = state;
      const filterByName = (g: Game) =>
        g.gameName.toLowerCase().includes(currentSearchGames.toLowerCase());
      const filterByType = (g: Game) => g.typeDescription === currentGameType;
      if (currentGameType === 'All') {
        state.displayedGames = currentSearchGames
          ? games.filter(filterByName)
          : games;
      } else {
        const filteredGames = games.filter(filterByType);
        state.displayedGames = currentSearchGames
          ? filteredGames.filter(filterByName)
          : filteredGames;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(gamesService.endpoints.getGames.matchPending, state => {
        state.status = 'loading';
      })
      .addMatcher(gamesService.endpoints.getGames.matchRejected, state => {
        state.status = 'failed';
      })
      .addMatcher(
        gamesService.endpoints.getGames.matchFulfilled,
        (state, action) => {
          action.payload.error_message &&
            (state.error = action.payload.error_message);
          const games = action.payload.result;
          if (games) {
            state.games.push(...games);
            state.displayedGames.push(...games);
            state.status = 'succeeded';
            const gameTypes = new Set<string>(state.gameTypes);
            games.forEach(g => gameTypes.add(g.typeDescription));
            state.gameTypes = Array.from(gameTypes);
          }
        },
      );
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
