import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../../types/track.interface";
import { RootState } from "../store";

interface PlayingState {
  song: Track | null;
  playing: boolean;
}

const initialState: PlayingState = {
  song: null,
  playing: true,
};

export const playingSlice = createSlice({
  name: "playing",
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

export const { loadSong, playpause } = playingSlice.actions;

export const playing = (state: RootState) => state.playing.playing;
export const song = (state: RootState) => state.playing.song;
