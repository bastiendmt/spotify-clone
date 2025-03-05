import { configureStore } from '@reduxjs/toolkit';
import currentSongSlice, {
  initialCurrentSongState,
} from './reducers/currentSong.slice';
import playlistDetailSlice, {
  initialPlaylistDetailsState,
} from './reducers/playlistDetail.slice';
import userPlaylistSlice, {
  initialUserPlaylistState,
} from './reducers/userPlaylists.slice';

export const store = configureStore({
  reducer: {
    currentSong: currentSongSlice.reducer,
    userPlaylists: userPlaylistSlice.reducer,
    playlistDetail: playlistDetailSlice.reducer,
  },
});

export const createMockStore = (preloadedState: Partial<RootState>) =>
  configureStore<RootState>({
    reducer: {
      currentSong: currentSongSlice.reducer,
      userPlaylists: userPlaylistSlice.reducer,
      playlistDetail: playlistDetailSlice.reducer,
    },
    preloadedState: {
      currentSong: preloadedState.currentSong || initialCurrentSongState,
      userPlaylists: preloadedState.userPlaylists || initialUserPlaylistState,
      playlistDetail:
        preloadedState.playlistDetail || initialPlaylistDetailsState,
    },
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const rootState = store.getState();
