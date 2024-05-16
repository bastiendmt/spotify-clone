import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import { mockTrack } from '../../../tests/mockData';
import { createMockStore } from '../../store/store';
import Player from './Player';

const playerStore = createMockStore({
  currentSong: { song: null, playing: false },
});

const playerStoreWithSong = createMockStore({
  currentSong: { song: mockTrack, playing: true },
});

describe('Player', () => {
  test('should render nothing', async () => {
    render(
      <Provider store={playerStore}>
        <Player />
      </Provider>,
    );
    expect(screen.queryByTestId('audioEml')).toBeFalsy();
  });

  test('should render audio element', async () => {
    render(
      <Provider store={playerStoreWithSong}>
        <Player />
      </Provider>,
    );
    expect(screen.getByTestId('audioEml')).toBeTruthy();
  });
});
