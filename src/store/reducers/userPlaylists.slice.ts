import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUserPlaylists } from '../../API';
import type { PlaylistTrackDetails } from '../../types/playlists.interface';
import type { RootState } from '../store';

export const fetchUserPlaylists = createAsyncThunk(
  'playlists/fetchUserPlaylists',
  async (user: string, thunkAPI) => {
    try {
      return await GetUserPlaylists(user);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

interface PlaylistState {
  error: string;
  loading: boolean;
  playlists: PlaylistTrackDetails[];
}

export const initialUserPlaylistState: PlaylistState = {
  error: '',
  loading: true,
  playlists: [],
};

const userPlaylistSlice = createSlice({
  name: 'userPlaylists',
  initialState: initialUserPlaylistState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlaylists.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchUserPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload.items;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchUserPlaylists.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = 'an error has occurred';
    });
  },
});

export default userPlaylistSlice;

export const selectUserPlaylists = (state: RootState) => state.userPlaylists;
