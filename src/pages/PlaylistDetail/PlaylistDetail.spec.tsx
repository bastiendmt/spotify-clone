import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, describe, expect, test } from 'vitest';
import { mockPlaylistDetails } from '../../../tests/mockData';
import { createMockStore } from '../../store/store';
import PlaylistDetail from './PlaylistDetail';

const store = createMockStore({
  playlistDetail: {
    playlist: mockPlaylistDetails,
    loading: false,
    error: '',
  },
});

const loadingStore = createMockStore({
  playlistDetail: {
    playlist: null,
    loading: true,
    error: '',
  },
});

describe('Playlist details', () => {
  afterEach(cleanup);

  test('should render loader', async () => {
    render(
      <Provider store={loadingStore}>
        <PlaylistDetail />
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeTruthy();
  });

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

  // test('should have a background color', async () => {
  //   render(
  //     <Provider store={store}>
  //       <PlaylistDetail />
  //     </Provider>,
  //   );

  //   expect(screen.getByTestId('Background').style.backgroundColor).toBeTruthy();
  // });
});
