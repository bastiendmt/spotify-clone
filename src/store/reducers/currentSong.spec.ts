import { describe, expect, it } from 'vitest';
import { mockTrack } from '../../../tests/mockData';
import { createTestStore } from '../test-utils';

describe('currentSong store', () => {
  it('should have the initial state', () => {
    const testStore = createTestStore();
    const state = testStore.getState();
    expect(state.currentSong.playing).toBe(false);
    expect(state.currentSong.song).toBe(null);
  });

  it('should handle loadSong', () => {
    const testStore = createTestStore();
    const { loadSong } = testStore.getState();

    loadSong(mockTrack);

    const newState = testStore.getState().currentSong;
    expect(newState.playing).toBe(true);
    expect(newState.song).toEqual(mockTrack);
  });

  it('should handle playPause', () => {
    const testStore = createTestStore();
    const { playPause, loadSong } = testStore.getState();

    // First load a song to set playing to true
    loadSong(mockTrack);
    expect(testStore.getState().currentSong.playing).toBe(true);

    // Then toggle play/pause
    playPause();
    expect(testStore.getState().currentSong.playing).toBe(false);

    // Toggle again
    playPause();
    expect(testStore.getState().currentSong.playing).toBe(true);
  });

  it('should handle fetchUserPlaylists', async () => {
    const testStore = createTestStore();
    const { fetchUserPlaylists } = testStore.getState();

    await fetchUserPlaylists('testUser');

    const state = testStore.getState().userPlaylists;
    expect(state.loading).toBe(false);
    expect(state.playlists).toEqual([]);
    expect(state.error).toBe('');
  });

  it('should handle fetchPlaylistById', async () => {
    const testStore = createTestStore();
    const { fetchPlaylistById } = testStore.getState();

    await fetchPlaylistById('test-id');

    const state = testStore.getState().playlistDetail;
    expect(state.loading).toBe(false);
    expect(state.playlist).toBe(null);
    expect(state.error).toBe('');
  });
});
