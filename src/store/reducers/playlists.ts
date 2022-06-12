import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlists } from "../../types/Playlists";
import { RootState } from "../store";

interface PlaylistState {
  playlists: Playlists | [];
}

const initialState: PlaylistState = {
  playlists: [],
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
export const selectPlaylists = (state: RootState) => state.playlists.playlists;
