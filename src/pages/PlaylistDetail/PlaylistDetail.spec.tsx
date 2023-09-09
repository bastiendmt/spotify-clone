import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import { mockPlaylistDetails } from '../../../tests/mockData';
import currentSongSlice from '../../store/reducers/currentSong.slice';
import featuredPlaylistSlice from '../../store/reducers/featuredPlaylists.slice';
import playlistDetailSlice from '../../store/reducers/playlistDetail.slice';
import PlaylistDetail from './PlaylistDetail';

const store = configureStore({
  reducer: {
    currentSong: currentSongSlice.reducer,
    featuredPlaylists: featuredPlaylistSlice.reducer,
    playlistDetail: playlistDetailSlice.reducer,
  },
  preloadedState: {
    playlistDetail: {
      playlist: mockPlaylistDetails,
      loading: false,
      error: '',
    },
  },
});

describe('Playlist details', () => {
  test('should render playlist details', async () => {
    render(
      <Provider store={store}>
        <PlaylistDetail />
      </Provider>,
    );

    expect((await screen.findByRole('heading')).textContent).toBe(
      'Hits du Moment',
    );
  });
});
