export interface ITopSongs {
  data: ITopSong[];
  next: string;
}

export interface ITopSong {
  attributes: Attributes;
  href: string;
  id: string;
  meta: Meta;
  type: Type;
}

export interface Attributes {
  albumName: string;
  artistName: string;
  artwork: Artwork;
  audioLocale: string;
  audioTraits: string[] | string;
  composerName: string;
  discNumber: number;
  durationInMillis: number;
  genreNames: string[] | string;
  hasCredits: boolean;
  hasLyrics: boolean;
  hasTimeSyncedLyrics: boolean;
  isAppleDigitalMaster: boolean;
  isMasteredForItunes: boolean;
  isVocalAttenuationAllowed: boolean;
  isrc: string;
  name: string;
  playParams: PlayParams;
  previews: Preview[];
  releaseDate: Date;
  trackNumber: number;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export interface PlayParams {
  id: string;
  kind: Kind;
}

export enum Kind {
  Song = 'song',
}

export interface Preview {
  url: string;
}

export interface Meta {
  formerIds: string[];
}

export enum Type {
  Songs = 'songs',
}
