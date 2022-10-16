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
  loading: boolean;
  error: string;
}

const initialState: PlaylistDetailState = {
  playlist: null,
  loading: true,
  error: '',
};

const playlistDetailSlice = createSlice({
  name: 'playlistDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylistById.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchPlaylistById.fulfilled, (state, action) => {
      state.playlist = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchPlaylistById.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = 'an error has occured';
    });
  },
});

export default playlistDetailSlice;
