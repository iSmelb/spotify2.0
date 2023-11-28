import { ITopSongs } from '@/types/typeTopSongs';
import { RootObject } from '@/types/types';
import { IArtistDetails } from '@/types/typesArtist';
import { ITrackDetails } from '@/types/typesSong';

export default class ShazamService {
  static baseUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_SHAZAM_CORE_URL
      : process.env.NEXT_PUBLIC_SHAZAM_URL;

  static hostName =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_SHAZAM_CORE_HOST_NAME
      : process.env.NEXT_PUBLIC_SHAZAM_HOST_NAME;

  static apiKey = process.env.NEXT_PUBLIC_API_KEY || '';

  static getSongsByCountry = async (country: string): Promise<RootObject> => {
    const response = await fetch(
      `${this.baseUrl}charts/get-top-songs-in_country_by_genre?country_code=${country}&genre=POP&limit=50`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': this.hostName || '',
          'X-RapidAPI-Key': this.apiKey,
        },
        cache: 'no-store',
      },
    );

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };

  static getArtistDetails = async (id: string): Promise<IArtistDetails> => {
    const response = await fetch(`${this.baseUrl}artist/get-details?id=${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': this.hostName || '',
        'X-RapidAPI-Key': this.apiKey,
      },
      next: {
        revalidate: 604800,
      },
    });

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };

  static getArtistTopSongs = async (id: string): Promise<ITopSongs> => {
    const response = await fetch(
      `${this.baseUrl}artist/get-top-songs?id=${id}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': this.hostName || '',
          'X-RapidAPI-Key': this.apiKey,
        },
        next: {
          revalidate: 604800,
        },
      },
    );

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };

  static getSongDetails = async (id: string): Promise<ITrackDetails> => {
    const response = await fetch(`${this.baseUrl}songs/get_details?id=${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': this.hostName || '',
        'X-RapidAPI-Key': this.apiKey,
      },
      next: {
        revalidate: 604800,
      },
    });

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };

  static getListRecomendation = async (id: string): Promise<RootObject> => {
    const response = await fetch(
      `${this.baseUrl}songs/list-recommendations?id=${id}&limit=10`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': this.hostName || '',
          'X-RapidAPI-Key': this.apiKey,
        },
        next: {
          revalidate: 604800,
        },
      },
    );

    if (response.status !== 200) throw new Error(response.statusText);
    return response.json();
  };
}
