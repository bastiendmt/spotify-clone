import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mockTrack } from '../../../tests/mockData';
import { createTestStore, setupTestStoreMocks } from '../../store/test-utils';
import * as zustandStore from '../../store/zustand-store';
import Player from './Player';

vi.mock('../../store/zustand-store');

describe('Player', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render nothing when no song is loaded', async () => {
    const testStore = createTestStore({
      currentSong: {
        song: null,
        playing: false,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);
    render(<Player />);
    expect(screen.queryByTestId('audioEml')).toBeFalsy();
  });

  test('should render audio element when song is loaded and playing', async () => {
    const testStore = createTestStore({
      currentSong: {
        song: mockTrack,
        playing: true,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);
    render(<Player />);
    expect(screen.getByTestId('audioEml')).toBeTruthy();
  });

  test('should render audio element when song is loaded but not playing', async () => {
    const testStore = createTestStore({
      currentSong: {
        song: mockTrack,
        playing: false,
      },
    });
    setupTestStoreMocks(testStore, zustandStore, vi);
    render(<Player />);
    expect(screen.getByTestId('audioEml')).toBeTruthy();
  });
});
