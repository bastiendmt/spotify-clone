import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaylistsType } from '../../types/playlists.interface';
import { RootState } from '../store';

export interface PlaylistState {
  playlists: PlaylistsType;
}

const initialState: PlaylistState = {
  playlists: {
    href: '',
    items: [],
    limit: 0,
    next: null,
    offset: 0,
    previous: null,
    total: 0,
  },
};

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<PlaylistsType>) => {
      state.playlists = action.payload;
    },
  },
});

export const { init } = playlistsSlice.actions;
export const selectPlaylists = (state: RootState): PlaylistsType =>
  state.playlists.playlists;
