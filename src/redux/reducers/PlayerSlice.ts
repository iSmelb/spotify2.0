import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootObject, Track } from '@/types/types';
import { ITrackDetails } from '@/types/typesSong';
import { ModifyTrack } from '@/types/ModifyTrack';

export interface IPlayerState {
  currentSongs: Track[] | ModifyTrack[] | [];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Track | {};
  genreListId: string;
}

const initialState: IPlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (
      state,
      action: PayloadAction<{
        song: Track | ITrackDetails | ModifyTrack;
        data: RootObject;
        i: number;
      }>,
    ) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks.length) {
        state.currentSongs = action.payload?.data?.tracks;
      }
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action: PayloadAction<number>) => {
      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action: PayloadAction<number>) => {
      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
