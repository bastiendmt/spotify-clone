import { Track } from "./Track";

export declare interface Playlist {
  collaborative: Boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
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
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
  };
  type: string;
  uri: string;
};
