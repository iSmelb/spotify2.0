export interface IArtistDetails {
  data: RootObjectDatum[];
}

export interface RootObjectDatum {
  attributes: Attributes;
  href: string;
  id: string;
  relationships: Relationships;
  type: string;
}

export interface Attributes {
  artwork: Artwork;
  genreNames: string[];
  name: string;
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

export interface Relationships {
  albums: Albums;
}

export interface Albums {
  data: AlbumsDatum[];
  href: string;
}

export interface AlbumsDatum {
  href: string;
  id: string;
  type: Type;
}

export enum Type {
  Albums = 'albums',
}
