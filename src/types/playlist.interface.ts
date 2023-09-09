import { Image } from './image.interface';
import { Track } from './track.interface';

export interface PlaylistType {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  followers: {
    href: null | string;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: null | string;
    offset: number;
    previous: null;
    total: number;
  };
  type: string;
  uri: string;
}
