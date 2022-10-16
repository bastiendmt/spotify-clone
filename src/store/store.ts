import { configureStore } from '@reduxjs/toolkit';
import { playingSlice } from './reducers/playing.reducer';
import { playlistsSlice } from './reducers/playlists.reducer';

export const store = configureStore({
  reducer: {
    playlists: playlistsSlice.reducer,
    playing: playingSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
