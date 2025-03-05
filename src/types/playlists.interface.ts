import type { Image } from './image.interface';

export interface PlaylistTrackDetails {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images?: Image[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: null;
  public: null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface UserPlaylistsType {
  href: string;
  items: PlaylistTrackDetails[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}
