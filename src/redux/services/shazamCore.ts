import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootObject } from './types';
import { ITrackDetails } from './typesSong';
import { IArtistDetails } from './typesArtist';
import { ITopSongs } from './typeTopSongs';

type QueryParams = {
  genre: string;
  limit?: number;
};

const generateQueryStr = (baseString: string, query: QueryParams): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

  return queryString;
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'ee9d38ea63mshbc70c57df52799dp17f7dcjsnf76227f4ba1e',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<RootObject, QueryParams>({
      query: (params) => {
        const queryStr = generateQueryStr(
          'charts/get-top-songs-in_world_by_genre?',
          params,
        );

        return { url: queryStr };
      },
    }),
    getSongDetails: builder.query<ITrackDetails, string>({
      query: (id) => `songs/get_details?id=${id}`,
    }),
    getListRecomendation: builder.query<RootObject, string>({
      query: (id) => `songs/list-recommendations?id=${id}&limit=10`,
    }),
    getArtistDetails: builder.query<IArtistDetails, string>({
      query: (id) => `artist/get-details?id=${id}`,
    }),
    getArtistTopSongs: builder.query<ITopSongs, string>({
      query: (id) => `artist/get-top-songs?id=${id}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetListRecomendationQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
} = shazamCoreApi;
