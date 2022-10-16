import { configureStore } from '@reduxjs/toolkit';
import featuredPlaylistSlice from './reducers/featuredPlaylists.slice';
import { playingSlice } from './reducers/playing.reducer';
import playlistDetailSlice from './reducers/playlistDetail.slice';

export const store = configureStore({
  reducer: {
    // TODO rename with currentSong
    playing: playingSlice.reducer,
    playlistDetail: playlistDetailSlice.reducer,
    featuredPlaylists: featuredPlaylistSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
