import { render, screen } from '@testing-library/react';
import Playlists from './Playlists';
import { test, describe, expect, beforeEach, vi } from 'vitest';
import { mockPlaylistDetails, mockPlaylists } from '../../../tests/mockData';
import { BrowserRouter } from 'react-router-dom';
import PlaylistDetail from './PlaylistDetail';
import * as hooks from '../../store/hooks';

const mockSelector = vi.fn();

vi.mock('../../store/hooks.ts', () => ({
  useAppSelector: mockSelector,
}));

describe('Playlist details', () => {
  beforeEach(() => {
    mockSelector.mockReturnValue({
      playlist: mockPlaylistDetails,
      loading: false,
      error: false,
    });
  });
  test('should render playlist details', async () => {
    render(<PlaylistDetail />);

    expect(await screen.getAllByRole('heading')).toBe('Hits du Moment');
  });
});
