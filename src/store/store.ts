import { configureStore } from '@reduxjs/toolkit';
import currentSongSlice, {
  initialCurrentSongState,
} from './reducers/currentSong.slice';
import featuredPlaylistSlice, {
  initialFeaturedPlaylistState,
} from './reducers/featuredPlaylists.slice';
import playlistDetailSlice, {
  initialPlaylistDetailsState,
} from './reducers/playlistDetail.slice';

export const store = configureStore({
  reducer: {
    currentSong: currentSongSlice.reducer,
    featuredPlaylists: featuredPlaylistSlice.reducer,
    playlistDetail: playlistDetailSlice.reducer,
  },
});

export const createMockStore = (preloadedState: Partial<RootState>) =>
  configureStore<RootState>({
    reducer: {
      currentSong: currentSongSlice.reducer,
      featuredPlaylists: featuredPlaylistSlice.reducer,
      playlistDetail: playlistDetailSlice.reducer,
    },
    preloadedState: {
      currentSong: preloadedState.currentSong || initialCurrentSongState,
      featuredPlaylists:
        preloadedState.featuredPlaylists || initialFeaturedPlaylistState,
      playlistDetail:
        preloadedState.playlistDetail || initialPlaylistDetailsState,
    },
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const rootState = store.getState();
