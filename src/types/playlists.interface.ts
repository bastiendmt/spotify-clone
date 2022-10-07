import { Playlist } from "./playlist.interface";

export interface Playlists {
  href: string;
  items: Playlist[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface FeaturedPlaylistsResponse {
  message: string;
  playlists: Playlists;
}
