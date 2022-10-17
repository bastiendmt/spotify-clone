import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetFeaturedPlaylists } from '../../API';
import { PlaylistsType } from '../../types/playlists.interface';

export const fetchFeaturedPlaylists = createAsyncThunk(
  'playlists/fetchFeatured',
  async (_, thunkAPI) => {
    try {
      return await GetFeaturedPlaylists();
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export interface PlaylistState {
  playlists: PlaylistsType | null;
  loading: boolean;
  error: string;
}

const initialState: PlaylistState = {
  playlists: null,
  loading: true,
  error: '',
};

const featuredPlaylistSlice = createSlice({
  name: 'featuredPlaylists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedPlaylists.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchFeaturedPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload.playlists;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchFeaturedPlaylists.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = 'an error has occured';
    });
  },
});

export default featuredPlaylistSlice;
