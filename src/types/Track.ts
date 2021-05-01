export declare interface Track {
  added_at: string;
  added_by: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: Boolean;
  primary_color: null;
  track: {
    album: {
      album_type: string;
      artists: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      external_urls: { spotify: string };
      href: string;
      id: string;
      images: {
        height: number;
        width: number;
        url: string;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: {
      external_urls: { spotify: string };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: Boolean;
    explicit: Boolean;
    external_ids: { isrc: string };
    external_urls: { spotify: string };
    href: string;
    id: string;
    is_local: Boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: Boolean;
    track_number: number;
    type: string;
    uri: string;
  };
  video_thumbnail: { url?: string };
}
