import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '../../types/track.interface';
import { RootState } from '../store';

export interface CurrentSongState {
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
