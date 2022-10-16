/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetPlaylistDetail } from '../../API';
import { PlaylistType } from '../../types/playlist.interface';

export const fetchPlaylistById = createAsyncThunk(
  'playlists/fetchById',
  async (playlistId: string, thunkAPI) => {
    try {
      return GetPlaylistDetail(playlistId);
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

interface PlaylistDetailState {
  playlist: null | PlaylistType;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PlaylistDetailState = {
  playlist: null,
  loading: 'idle',
};

const playlistDetailSlice = createSlice({
  name: 'playlistDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylistById.fulfilled, (state, action) => {
      state.playlist = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchPlaylistById.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPlaylistById.rejected, (state, action) => {
      console.log(action);
      state.loading = 'failed';
    });
  },
});

export default playlistDetailSlice;
