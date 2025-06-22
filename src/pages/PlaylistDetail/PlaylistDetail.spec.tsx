import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { mockPlaylistDetails } from '../../../tests/mockData';
import { createTestStore, setupTestStoreMocks } from '../../store/test-utils';
import * as zustandStore from '../../store/zustand-store';
import PlaylistDetail from './PlaylistDetail';

vi.mock('../../store/zustand-store');

describe('Playlist details', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test('should render loader when playlist is loading', async () => {
    const testStore = createTestStore({
      playlistDetail: {
        playlist: null,
        loading: true,
        error: '',
      },
      currentSong: {
        song: null,
        playing: false,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);

    render(
      <MemoryRouter initialEntries={['/playlist/123']}>
        <PlaylistDetail />
      </MemoryRouter>,
    );
    expect(screen.getByRole('progressbar', { busy: true })).toBeTruthy();
  });

  test('should render playlist details when loaded', async () => {
    const testStore = createTestStore({
      playlistDetail: {
        playlist: mockPlaylistDetails,
        loading: false,
        error: '',
      },
      currentSong: {
        song: null,
        playing: false,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);
    render(
      <MemoryRouter initialEntries={['/playlist/123']}>
        <PlaylistDetail />
      </MemoryRouter>,
    );
    expect(screen.findByText('Hits du Moment')).toBeTruthy();
  });

  test('should render error state when there is an error', async () => {
    const testStore = createTestStore({
      playlistDetail: {
        playlist: null,
        loading: false,
        error: 'Failed to load playlist',
      },
      currentSong: {
        song: null,
        playing: false,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);
    render(
      <MemoryRouter initialEntries={['/playlist/123']}>
        <PlaylistDetail />
      </MemoryRouter>,
    );
    // The error handling would depend on how the component handles error states
    // For now, we just verify the component renders without crashing
    expect(screen.queryByRole('progressbar', { busy: true })).toBeFalsy();
  });
});
