import { describe, expect, it } from 'vitest';
import { mockTrack } from '../../../tests/mockData';
import currentSongSlice, {
  initialCurrentSongState,
  loadSong,
  playPause,
} from './currentSong.slice';

describe('currentSong', () => {
  const initialState = currentSongSlice.reducer(undefined, { type: 'unknown' });

  it('should return the initial state', () => {
    expect(initialState).toEqual(initialCurrentSongState);
  });

  it('should handle loadSong', () => {
    const newState = currentSongSlice.reducer(undefined, loadSong(mockTrack));
    expect(newState.playing).toBe(true);
    expect(newState.song).toEqual(mockTrack);
  });
  it('should handle playPause', () => {
    const newState = currentSongSlice.reducer(
      { playing: true, song: null },
      playPause(),
    );
    expect(newState.playing).toBe(false);
  });
});
