import type { Image } from './image.interface';
import type { Track } from './track.interface';

export interface PlaylistType {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
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
  primary_color: null;
  public: null;
  snapshot_id: string;
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
  };
  type: string;
  uri: string;
}
