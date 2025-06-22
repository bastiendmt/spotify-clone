import { create } from 'zustand';
import { GetPlaylistDetail, GetUserPlaylists } from '../API';
import type { PlaylistType } from '../types/playlist.interface';
import type { PlaylistTrackDetails } from '../types/playlists.interface';
import type { Track } from '../types/track.interface';

interface CurrentSongState {
  playing: boolean;
  song: Track | null;
}

interface UserPlaylistsState {
  error: string;
  loading: boolean;
  playlists: PlaylistTrackDetails[];
}

interface PlaylistDetailState {
  error: string;
  loading: boolean;
  playlist: null | PlaylistType;
}

export interface AppState {
  currentSong: CurrentSongState;
  userPlaylists: UserPlaylistsState;
  playlistDetail: PlaylistDetailState;

  // Actions
  loadSong: (song: Track) => void;
  playPause: () => void;

  fetchUserPlaylists: (user: string) => Promise<void>;
  fetchPlaylistById: (playlistId: string) => Promise<void>;
}

// Initial states
const initialCurrentSongState: CurrentSongState = {
  playing: false,
  song: null,
};

const initialUserPlaylistState: UserPlaylistsState = {
  error: '',
  loading: true,
  playlists: [],
};

const initialPlaylistDetailsState: PlaylistDetailState = {
  error: '',
  loading: true,
  playlist: null,
};

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  currentSong: initialCurrentSongState,
  userPlaylists: initialUserPlaylistState,
  playlistDetail: initialPlaylistDetailsState,

  // Current song actions
  loadSong: (song: Track) => {
    set((state) => ({
      currentSong: {
        ...state.currentSong,
        playing: true,
        song,
      },
    }));
  },

  playPause: () => {
    set((state) => ({
      currentSong: {
        ...state.currentSong,
        playing: !state.currentSong.playing,
      },
    }));
  },

  // User playlists actions
  fetchUserPlaylists: async (user: string) => {
    set((state) => ({
      userPlaylists: {
        ...state.userPlaylists,
        loading: true,
        error: '',
      },
    }));

    try {
      const result = await GetUserPlaylists(user);
      set(() => ({
        userPlaylists: {
          playlists: result.items,
          loading: false,
          error: '',
        },
      }));
    } catch (error) {
      console.error(error);
      set((state) => ({
        userPlaylists: {
          ...state.userPlaylists,
          loading: false,
          error: 'an error has occurred',
        },
      }));
    }
  },

  // Playlist detail actions
  fetchPlaylistById: async (playlistId: string) => {
    set((state) => ({
      playlistDetail: {
        ...state.playlistDetail,
        loading: true,
        error: '',
      },
    }));

    try {
      const playlist = await GetPlaylistDetail(playlistId);
      set(() => ({
        playlistDetail: {
          playlist,
          loading: false,
          error: '',
        },
      }));
    } catch (error) {
      console.error(error);
      set((state) => ({
        playlistDetail: {
          ...state.playlistDetail,
          loading: false,
          error: 'an error has occurred',
        },
      }));
    }
  },
}));

// Selector hooks for backward compatibility and cleaner code
export const useCurrentSong = () => useAppStore((state) => state.currentSong);
export const useUserPlaylists = () =>
  useAppStore((state) => state.userPlaylists);
export const usePlaylistDetail = () =>
  useAppStore((state) => state.playlistDetail);

export default useAppStore;
