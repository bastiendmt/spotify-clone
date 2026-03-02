import { create } from 'zustand';
import type { Track } from '../types/track.interface';
import type { AppState } from './zustand-store';

// Test store factory for testing
export const createTestStore = (initialState?: Partial<AppState>) => {
  return create<AppState>((set) => ({
    // Default initial state
    currentSong: {
      playing: false,
      song: null,
    },
    userPlaylists: {
      error: '',
      loading: false,
      playlists: [],
    },
    playlistDetail: {
      error: '',
      loading: false,
      playlist: null,
    },

    // Override with provided initial state
    ...initialState,

    // Actions that work with the test store
    loadSong: (song: Track) => {
      set((state: AppState) => ({
        currentSong: {
          ...state.currentSong,
          playing: true,
          song,
        },
      }));
    },

    playPause: () => {
      set((state: AppState) => ({
        currentSong: {
          ...state.currentSong,
          playing: !state.currentSong.playing,
        },
      }));
    },

    fetchUserPlaylists: async (_user: string) => {
      set(() => ({
        userPlaylists: {
          playlists: [],
          loading: false,
          error: '',
        },
      }));
    },

    fetchPlaylistById: async (_playlistId: string) => {
      set(() => ({
        playlistDetail: {
          playlist: null,
          loading: false,
          error: '',
        },
      }));
    },
  }));
};

// Helper function to set up store mocks with a test store
export const setupTestStoreMocks = (
  testStore: ReturnType<typeof createTestStore>,
  zustandStore: typeof import('./zustand-store'),
  vi: typeof import('vitest').vi,
) => {
  // Create hooks that use the test store
  const useAppStore = <T>(selector: (state: AppState) => T): T => {
    const state = testStore.getState();
    return selector(state);
  };

  const useCurrentSong = () => testStore.getState().currentSong;
  const useUserPlaylists = () => testStore.getState().userPlaylists;
  const usePlaylistDetail = () => testStore.getState().playlistDetail;

  // Set up the mocks to use our test store hooks
  vi.mocked(zustandStore.useAppStore).mockImplementation(useAppStore);
  vi.mocked(zustandStore.useCurrentSong).mockImplementation(useCurrentSong);
  vi.mocked(zustandStore.useUserPlaylists).mockImplementation(useUserPlaylists);
  vi.mocked(zustandStore.usePlaylistDetail).mockImplementation(
    usePlaylistDetail,
  );
};
