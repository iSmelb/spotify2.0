export interface ISearchResult {
  artist: RootObjectArtist;
  tracks: Tracks;
}

export interface RootObjectArtist {
  hits: ArtistHit[];
}

export interface ArtistHit {
  artist: PurpleArtist;
}

export interface PurpleArtist {
  adam_id: number;
  alias: null;
  avatar: null | string;
  genres: any[];
  genres_primary: null;
  name: string;
  url: string;
  verified: boolean;
}

export interface Tracks {
  hits: TracksHit[];
}

export interface TracksHit {
  actions: HitAction[];
  alias: string;
  artists: ArtistElement[];
  heading: Heading;
  images: Images;
  key: string;
  share: Share;
  stores: Stores;
  streams: Streams;
  type: HitType;
  url: string;
  urlparams: Urlparams;
}

export interface HitAction {
  id: string;
  name: string;
  type: PurpleType;
}

export enum PurpleType {
  Track = 'track',
}

export interface ArtistElement {
  adamid: string;
  alias: string;
  id: string;
}

export interface Heading {
  subtitle: string;
  title: string;
}

export interface Images {
  blurred: string;
  default: string;
  play: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export interface Stores {
  apple: Apple;
}

export interface Apple {
  actions: AppleAction[];
  coverarturl: string;
  explicit: boolean;
  previewurl: string;
  productid: string;
  trackid: string;
}

export interface AppleAction {
  type: FluffyType;
  uri: string;
}

export enum FluffyType {
  URI = 'uri',
}

export interface Streams {}

export enum HitType {
  Music = 'MUSIC',
}

export interface Urlparams {
  '{trackartist}': string;
  '{tracktitle}': string;
}
