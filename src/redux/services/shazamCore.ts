import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootObject } from '@/types/types';
import { ISearchResult } from '@/types/typesSearch';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SHAZAM_CORE_URL
    : process.env.NEXT_PUBLIC_SHAZAM_URL;

const hostName =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SHAZAM_CORE_HOST_NAME
    : process.env.NEXT_PUBLIC_SHAZAM_HOST_NAME;

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
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';

      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', hostName || '');

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
    getBySearch: builder.query<ISearchResult, string | null>({
      query: (query) => `search?term=${query}&limit=50`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetBySearchQuery } = shazamCoreApi;
