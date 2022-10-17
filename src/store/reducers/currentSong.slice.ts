import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../../types/track.interface';
import { RootState } from '../store';

export interface CurrentSongState {
  song: Track | null;
  playing: boolean;
}

const initialState: CurrentSongState = {
  song: null,
  playing: true,
};

export const currentSongSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    loadSong: (state, action: PayloadAction<Track>) => {
      state.playing = true;
      state.song = action.payload;
    },
    playpause: (state) => {
      state.playing = !state.playing;
    },
  },
});

export const { loadSong, playpause } = currentSongSlice.actions;

export const song = (state: RootState): Track | null => state.currentSong.song;
export const playingSelector = (state: RootState): boolean =>
  state.currentSong.playing;
