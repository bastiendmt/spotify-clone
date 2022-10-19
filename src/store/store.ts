import { configureStore } from '@reduxjs/toolkit';
import currentSongSlice from './reducers/currentSong.slice';
import featuredPlaylistSlice from './reducers/featuredPlaylists.slice';
import playlistDetailSlice from './reducers/playlistDetail.slice';

export const store = configureStore({
  reducer: {
    currentSong: currentSongSlice.reducer,
    featuredPlaylists: featuredPlaylistSlice.reducer,
    playlistDetail: playlistDetailSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const rootState = store.getState();
