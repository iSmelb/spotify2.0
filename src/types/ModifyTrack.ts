import { ITopSong } from '@/types/typeTopSongs';

export class ModifyTrack {
  hub: {
    actions: Array<{ uri?: string }>;
  };
  images: {
    coverart: string;
  };
  title: string;
  subtitle: string;
  key: string;
  songId?: number | string;
  artists: Array<{ adamid?: string }>;

  constructor(topSong: ITopSong) {
    this.hub = {
      actions: [
        {},
        {
          uri: topSong.attributes?.previews[0]?.url,
        },
      ],
    };
    this.images = {
      coverart: topSong.attributes?.artwork?.url
        .replace('{w}', '125')
        .replace('{h}', '125'),
    };
    this.title = topSong.attributes?.name;
    this.subtitle = topSong.attributes?.artistName;
    this.key = topSong.id;
    this.artists = [{ adamid: topSong.id }];
  }
}
