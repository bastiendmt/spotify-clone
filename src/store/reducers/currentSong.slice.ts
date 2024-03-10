import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Track } from '../../types/track.interface';
import type { RootState } from '../store';

interface CurrentSongState {
  playing: boolean;
  song: Track | null;
}

const initialState: CurrentSongState = {
  playing: true,
  song: null,
};

const currentSongSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    loadSong: (state, action: PayloadAction<Track>) => {
      state.playing = true;
      state.song = action.payload;
    },
    playPause: (state) => {
      state.playing = !state.playing;
    },
  },
});

export const { loadSong, playPause } = currentSongSlice.actions;

export default currentSongSlice;

export const selectCurrentSong = (state: RootState) => state.currentSong;
