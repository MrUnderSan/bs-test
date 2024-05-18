import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://staging.belparyaj.com/api/pragmatic/game_list',
});
