import { baseApi } from '../baseApi';
import { GamesResponse } from './games.types';

export const gamesService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getGames: builder.query<GamesResponse, void>({
        providesTags: ['Games'],
        query: () => ({
          url: '',
        }),
      }),
    };
  },
});

export const { useGetGamesQuery, useLazyGetGamesQuery } = gamesService;
