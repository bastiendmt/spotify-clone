import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetPlaylistDetail } from '../../API';
import type { PlaylistType } from '../../types/playlist.interface';
import type { RootState } from '../store';

export const fetchPlaylistById = createAsyncThunk(
  'playlists/fetchById',
  async (playlistId: string, thunkAPI) => {
    try {
      return await GetPlaylistDetail(playlistId);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

interface PlaylistDetailState {
  error: string;
  loading: boolean;
  playlist: null | PlaylistType;
}

export const initialPlaylistDetailsState: PlaylistDetailState = {
  error: '',
  loading: true,
  playlist: null,
};

const playlistDetailSlice = createSlice({
  name: 'playlistDetail',
  initialState: initialPlaylistDetailsState,
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
      state.error = 'an error has occurred';
    });
  },
});

export default playlistDetailSlice;

export const playlistDetailsSelector = (state: RootState) =>
  state.playlistDetail;
