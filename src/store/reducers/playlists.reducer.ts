import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistsType } from "../../types/playlists.interface";
import { RootState } from "../store";

interface PlaylistState {
  playlists: PlaylistsType | null;
}

const initialState: PlaylistState = {
  playlists: null,
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<PlaylistsType>) => {
      state.playlists = action.payload;
    },
  },
});

export const { init } = playlistsSlice.actions;
export const selectPlaylists = (state: RootState) => {
  console.log("select playlists called");
  return state.playlists.playlists;
};
