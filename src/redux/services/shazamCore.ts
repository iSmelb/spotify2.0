import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Isong } from './types';


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'ee9d38ea63mshbc70c57df52799dp17f7dcjsnf76227f4ba1e');

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Isong[], null>({ query: () => '/charts/get-top-songs-in-worldr'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;