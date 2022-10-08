import { PlaylistType } from "./playlist.interface";

export interface PlaylistsType {
  href: string;
  items: PlaylistType[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface FeaturedPlaylistsResponse {
  message: string;
  playlists: PlaylistsType;
}
