import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFeaturedPlaylists } from '../../API';
import type { PlaylistsType } from '../../types/playlists.interface';
import type { RootState } from '../store';

export const fetchFeaturedPlaylists = createAsyncThunk(
  'playlists/fetchFeatured',
  async (_, thunkAPI) => {
    try {
      return await GetFeaturedPlaylists();
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

interface PlaylistState {
  error: string;
  loading: boolean;
  message: string;
  playlists: PlaylistsType | null;
}

export const initialFeaturedPlaylistState: PlaylistState = {
  error: '',
  loading: true,
  message: '',
  playlists: null,
};

const featuredPlaylistSlice = createSlice({
  name: 'featuredPlaylists',
  initialState: initialFeaturedPlaylistState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedPlaylists.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchFeaturedPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload.playlists;
      state.message = action.payload.message;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchFeaturedPlaylists.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = 'an error has occurred';
    });
  },
});

export default featuredPlaylistSlice;

export const selectFeaturedPlaylists = (state: RootState) =>
  state.featuredPlaylists;
