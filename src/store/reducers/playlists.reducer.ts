import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlists } from "../../types/playlists.interface";
import { RootState } from "../store";

interface PlaylistState {
  playlists: Playlists | null;
}

const initialState: PlaylistState = {
  playlists: null,
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Playlists>) => {
      state.playlists = action.payload;
    },
  },
});

export const { init } = playlistsSlice.actions;
export const selectPlaylists = (state: RootState) => {
  console.log("select playlists called");
  return state.playlists.playlists;
};
