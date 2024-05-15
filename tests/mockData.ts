import { PlaylistType } from '../src/types/playlist.interface';
import { PlaylistsType } from '../src/types/playlists.interface';
import { Track } from '../src/types/track.interface';

export const mockTrack: Track = {
  added_at: '2023-08-31T11:01:00Z',
  added_by: {
    external_urls: {
      spotify: 'https://open.spotify.com/user/',
    },
    href: 'https://api.spotify.com/v1/users/',
    id: '',
    type: 'user',
    uri: 'spotify:user:',
  },
  is_local: false,
  primary_color: null,
  track: {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q',
          },
          href: 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q',
          id: '53XhwfbYqKCa1cC15pYq2q',
          name: 'Imagine Dragons',
          type: 'artist',
          uri: 'spotify:artist:53XhwfbYqKCa1cC15pYq2q',
        },
      ],
      available_markets: ['AR', 'AU'],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6yiXkzHvC0OTmhfDQOEWtS',
      },
      href: 'https://api.spotify.com/v1/albums/6yiXkzHvC0OTmhfDQOEWtS',
      id: '6yiXkzHvC0OTmhfDQOEWtS',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02fc915b69600dce2991a61f13',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851fc915b69600dce2991a61f13',
          width: 64,
        },
      ],
      name: 'Mercury - Acts 1 & 2',
      release_date: '2022-07-01',
      release_date_precision: 'day',
      total_tracks: 32,
      type: 'album',
      uri: 'spotify:album:6yiXkzHvC0OTmhfDQOEWtS',
    },
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q',
        },
        href: 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q',
        id: '53XhwfbYqKCa1cC15pYq2q',
        name: 'Imagine Dragons',
        type: 'artist',
        uri: 'spotify:artist:53XhwfbYqKCa1cC15pYq2q',
      },
    ],
    available_markets: ['AR', 'AU'],
    disc_number: 2,
    duration_ms: 225431,
    episode: false,
    explicit: false,
    external_ids: {
      isrc: 'USUM72205470',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/0YbFEoJi7Esa7lhIrEpBjl',
    },
    href: 'https://api.spotify.com/v1/tracks/0YbFEoJi7Esa7lhIrEpBjl',
    id: '0YbFEoJi7Esa7lhIrEpBjl',
    is_local: false,
    name: 'Waves',
    popularity: 77,
    preview_url: null,
    track: true,
    track_number: 9,
    type: 'track',
    uri: 'spotify:track:0YbFEoJi7Esa7lhIrEpBjl',
  },
  video_thumbnail: {
    url: null,
  },
};

export const mockPlaylists: PlaylistsType = {
  href: 'https://api.spotify.com/v1/browse/featured-playlists?country=FR&timestamp=2023-09-03T16%3A51%3A53&offset=0&limit=20',
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 10,
  items: [
    {
      collaborative: false,
      description:
        'Imagine Dragons au sommet de la première playlist de France.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWVuV87wUBNwc',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVuV87wUBNwc',
      id: '37i9dQZF1DWVuV87wUBNwc',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003329694841f13f3d4b1820e58',
          width: null,
        },
      ],
      name: 'Hits du Moment',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxMDk5NSwwMDAwMDAwMGNiNGFlNTYwMTJkM2EyZTJkYmQ1NjEwMDRiYmIwZjc4',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVuV87wUBNwc/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWVuV87wUBNwc',
    },
    {
      collaborative: false,
      description: 'La discothèque idéale.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX5wSQbrOxKS2',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX5wSQbrOxKS2',
      id: '37i9dQZF1DX5wSQbrOxKS2',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000030a6f93a44cd25a2897664132',
          width: null,
        },
      ],
      name: 'On connaît la chanson',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY4NjkxODI5MywwMDAwMDAwMGNkNmEzYmEwYjczOGMxODUzY2JmNDQ2NDljMzUwNDRh',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX5wSQbrOxKS2/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX5wSQbrOxKS2',
    },
    {
      collaborative: false,
      description: 'The best jazz new releases. Cover: Cautious Clay',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1S1NduGwpsa',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1S1NduGwpsa',
      id: '37i9dQZF1DX1S1NduGwpsa',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003c9af83aa50da566d4a960e99',
          width: null,
        },
      ],
      name: 'Jazz Club',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxOTI2MCwwMDAwMDAwMGIwN2I3OTRjM2E1M2VhNWFkYjJhMTM5NWVhN2Y4ZWE2',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1S1NduGwpsa/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX1S1NduGwpsa',
    },
    {
      collaborative: false,
      description:
        'Les meilleurs morceaux alternatifs du moment. Photo : My Ugly Clementine',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWUa8WMYIRY8Y',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8WMYIRY8Y',
      id: '37i9dQZF1DWUa8WMYIRY8Y',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000032e260d4f2e7971047da4ef58',
          width: null,
        },
      ],
      name: 'Hot Alternative',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxOTIwMCwwMDAwMDAwMDQxMDQyZGNhNTIyZjEyODk3NzgyODlhMTdiNjk4MjQ5',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8WMYIRY8Y/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWUa8WMYIRY8Y',
    },
    {
      collaborative: false,
      description: 'Peaceful piano to help you slow down, breathe, and relax. ',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO',
      id: '37i9dQZF1DX4sWSpwq3LiO',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003d073e656e546e43bc387ad79',
          width: null,
        },
      ],
      name: 'Peaceful Piano',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzMwMTYzOSwwMDAwMDAwMDFlMTZhYWRlYzM2OTExYTc4NTVhN2NiYWM4MjQ5MzVk',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks',
        total: 302,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX4sWSpwq3LiO',
    },
    {
      collaborative: false,
      description:
        'Les meilleurs hits pour accompagner votre séance de sport !',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX39mId53VASc',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX39mId53VASc',
      id: '37i9dQZF1DX39mId53VASc',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f0000000311bd1ea7ae0bb32b0e900a6f',
          width: null,
        },
      ],
      name: 'Motivation pour le sport',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzU1MjM4NiwwMDAwMDAwMDYzYjg2YWRiOWUwNDU1ZDNkNjY1ZDQzMjNmYTcwMTUw',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX39mId53VASc/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX39mId53VASc',
    },
    {
      collaborative: false,
      description: 'Le meilleur des années 2010 en 100 titres.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX8E06AbSENEw',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX8E06AbSENEw',
      id: '37i9dQZF1DX8E06AbSENEw',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000032a0a82d4d4cf990b76bf5496',
          width: null,
        },
      ],
      name: 'Années 2010',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MjgwMjgwMCwwMDAwMDAwMDFkMWNmZGNlNDQzYzMwZDNiNWM3NzYzYjk5YzdiNDY2',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX8E06AbSENEw/tracks',
        total: 100,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX8E06AbSENEw',
    },
    {
      collaborative: false,
      description: 'La variété française fait un pas de côté. Photo: 47ter',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX9h4FeDa1xsw',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX9h4FeDa1xsw',
      id: '37i9dQZF1DX9h4FeDa1xsw',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f000000038061165c7888798fc7d37d31',
          width: null,
        },
      ],
      name: 'Vice Versa',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxOTIwMCwwMDAwMDAwMGM2MDc2NTZkMmM4ZDdkMmJiZGM4ZjdmZWEwOTRlMWU1',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX9h4FeDa1xsw/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DX9h4FeDa1xsw',
    },
    {
      collaborative: false,
      description: 'The magical world map! Play it in shuffle ☀️',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXjv2J1ebzlh',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXjv2J1ebzlh',
      id: '37i9dQZF1DWXjv2J1ebzlh',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003004bb060bb805361451bb8fe',
          width: null,
        },
      ],
      name: 'Bon Voyage',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxOTIwMCwwMDAwMDAwMDU1MTM1MWY5YzEzMjNlODViOTM3MTBhNDJmZmEzZmFl',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXjv2J1ebzlh/tracks',
        total: 1175,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWXjv2J1ebzlh',
    },
    {
      collaborative: false,
      description: 'Tîësto au top des nouveautés electro !',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWTIfBdh7WtFL',
      },
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTIfBdh7WtFL',
      id: '37i9dQZF1DWTIfBdh7WtFL',
      images: [
        {
          height: null,
          url: 'https://i.scdn.co/image/ab67706f00000003d1639046ca6bc6c76ba2bac0',
          width: null,
        },
      ],
      name: 'Nouveautés Electro',
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      primary_color: null,
      public: null,
      snapshot_id:
        'MTY5MzUxOTIwMCwwMDAwMDAwMDc4YjAwODVkZGUxZDE5ZGE4MDVjMTMwYWI4YmMwZGY5',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTIfBdh7WtFL/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DWTIfBdh7WtFL',
    },
  ],
};

export const mockPlaylistDetails: PlaylistType = {
  collaborative: false,
  description: 'Imagine Dragons au sommet de la première playlist de France.',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWVuV87wUBNwc',
  },
  followers: {
    href: null,
    total: 2180666,
  },
  href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVuV87wUBNwc',
  id: '37i9dQZF1DWVuV87wUBNwc',
  images: [
    {
      height: null,
      url: 'https://i.scdn.co/image/ab67706f00000003329694841f13f3d4b1820e58',
      width: null,
    },
  ],
  name: 'Hits du Moment',
  owner: {
    display_name: 'Spotify',
    external_urls: {
      spotify: 'https://open.spotify.com/user/spotify',
    },
    href: 'https://api.spotify.com/v1/users/spotify',
    id: 'spotify',
    type: 'user',
    uri: 'spotify:user:spotify',
  },
  primary_color: '#FFFFFF',
  public: false,
  snapshot_id: 'MCwxZDU1OGM2NWRiNjBhYTZlNzZjYmVkZTQ2YTZhMWFkZDMzYWFiN2I5',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWVuV87wUBNwc/tracks?offset=0&limit=100&locale=en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7',
    items: [
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q',
                },
                href: 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q',
                id: '53XhwfbYqKCa1cC15pYq2q',
                name: 'Imagine Dragons',
                type: 'artist',
                uri: 'spotify:artist:53XhwfbYqKCa1cC15pYq2q',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/6yiXkzHvC0OTmhfDQOEWtS',
            },
            href: 'https://api.spotify.com/v1/albums/6yiXkzHvC0OTmhfDQOEWtS',
            id: '6yiXkzHvC0OTmhfDQOEWtS',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02fc915b69600dce2991a61f13',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851fc915b69600dce2991a61f13',
                width: 64,
              },
            ],
            name: 'Mercury - Acts 1 & 2',
            release_date: '2022-07-01',
            release_date_precision: 'day',
            total_tracks: 32,
            type: 'album',
            uri: 'spotify:album:6yiXkzHvC0OTmhfDQOEWtS',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q',
              },
              href: 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q',
              id: '53XhwfbYqKCa1cC15pYq2q',
              name: 'Imagine Dragons',
              type: 'artist',
              uri: 'spotify:artist:53XhwfbYqKCa1cC15pYq2q',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 2,
          duration_ms: 225431,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USUM72205470',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/0YbFEoJi7Esa7lhIrEpBjl',
          },
          href: 'https://api.spotify.com/v1/tracks/0YbFEoJi7Esa7lhIrEpBjl',
          id: '0YbFEoJi7Esa7lhIrEpBjl',
          is_local: false,
          name: 'Waves',
          popularity: 77,
          preview_url: null,
          track: true,
          track_number: 9,
          type: 'track',
          uri: 'spotify:track:0YbFEoJi7Esa7lhIrEpBjl',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/3HqP3nd8WI0VfHRhApPlan',
                },
                href: 'https://api.spotify.com/v1/artists/3HqP3nd8WI0VfHRhApPlan',
                id: '3HqP3nd8WI0VfHRhApPlan',
                name: 'Trinix',
                type: 'artist',
                uri: 'spotify:artist:3HqP3nd8WI0VfHRhApPlan',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/70W0ftdGNlFkgrqu5O0QiI',
                },
                href: 'https://api.spotify.com/v1/artists/70W0ftdGNlFkgrqu5O0QiI',
                id: '70W0ftdGNlFkgrqu5O0QiI',
                name: 'One-T',
                type: 'artist',
                uri: 'spotify:artist:70W0ftdGNlFkgrqu5O0QiI',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/015JXvTq9kGDXlJs0z8fYY',
            },
            href: 'https://api.spotify.com/v1/albums/015JXvTq9kGDXlJs0z8fYY',
            id: '015JXvTq9kGDXlJs0z8fYY',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273172ec92da271e71498440056',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02172ec92da271e71498440056',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851172ec92da271e71498440056',
                width: 64,
              },
            ],
            name: 'The Magic Key',
            release_date: '2023-04-07',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:015JXvTq9kGDXlJs0z8fYY',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3HqP3nd8WI0VfHRhApPlan',
              },
              href: 'https://api.spotify.com/v1/artists/3HqP3nd8WI0VfHRhApPlan',
              id: '3HqP3nd8WI0VfHRhApPlan',
              name: 'Trinix',
              type: 'artist',
              uri: 'spotify:artist:3HqP3nd8WI0VfHRhApPlan',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/70W0ftdGNlFkgrqu5O0QiI',
              },
              href: 'https://api.spotify.com/v1/artists/70W0ftdGNlFkgrqu5O0QiI',
              id: '70W0ftdGNlFkgrqu5O0QiI',
              name: 'One-T',
              type: 'artist',
              uri: 'spotify:artist:70W0ftdGNlFkgrqu5O0QiI',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 171211,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'QM4TX2333885',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/6vHkJ4L8gqCwedvhXkSCsa',
          },
          href: 'https://api.spotify.com/v1/tracks/6vHkJ4L8gqCwedvhXkSCsa',
          id: '6vHkJ4L8gqCwedvhXkSCsa',
          is_local: false,
          name: 'The Magic Key',
          popularity: 76,
          preview_url:
            'https://p.scdn.co/mp3-preview/487459b247de57bd882c159025a27130d2bb762d?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:6vHkJ4L8gqCwedvhXkSCsa',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/49aaHxvAJ0tCh0F15OnwIl',
                },
                href: 'https://api.spotify.com/v1/artists/49aaHxvAJ0tCh0F15OnwIl',
                id: '49aaHxvAJ0tCh0F15OnwIl',
                name: 'Loreen',
                type: 'artist',
                uri: 'spotify:artist:49aaHxvAJ0tCh0F15OnwIl',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/0LRTS7FyYLppkDLOZT02Xp',
            },
            href: 'https://api.spotify.com/v1/albums/0LRTS7FyYLppkDLOZT02Xp',
            id: '0LRTS7FyYLppkDLOZT02Xp',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2732b0ba87db609976eee193bd6',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e022b0ba87db609976eee193bd6',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048512b0ba87db609976eee193bd6',
                width: 64,
              },
            ],
            name: 'Tattoo',
            release_date: '2023-02-25',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:0LRTS7FyYLppkDLOZT02Xp',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/49aaHxvAJ0tCh0F15OnwIl',
              },
              href: 'https://api.spotify.com/v1/artists/49aaHxvAJ0tCh0F15OnwIl',
              id: '49aaHxvAJ0tCh0F15OnwIl',
              name: 'Loreen',
              type: 'artist',
              uri: 'spotify:artist:49aaHxvAJ0tCh0F15OnwIl',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 183374,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'SEUM72201638',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/1DmW5Ep6ywYwxc2HMT5BG6',
          },
          href: 'https://api.spotify.com/v1/tracks/1DmW5Ep6ywYwxc2HMT5BG6',
          id: '1DmW5Ep6ywYwxc2HMT5BG6',
          is_local: false,
          name: 'Tattoo',
          popularity: 90,
          preview_url: null,
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:1DmW5Ep6ywYwxc2HMT5BG6',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/5c0lDrNyT2RnFhujZpPIas',
                },
                href: 'https://api.spotify.com/v1/artists/5c0lDrNyT2RnFhujZpPIas',
                id: '5c0lDrNyT2RnFhujZpPIas',
                name: 'Victor Thompson',
                type: 'artist',
                uri: 'spotify:artist:5c0lDrNyT2RnFhujZpPIas',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/5OLkn5GT6EcMuJzjwgvQnu',
                },
                href: 'https://api.spotify.com/v1/artists/5OLkn5GT6EcMuJzjwgvQnu',
                id: '5OLkn5GT6EcMuJzjwgvQnu',
                name: 'Vacra',
                type: 'artist',
                uri: 'spotify:artist:5OLkn5GT6EcMuJzjwgvQnu',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/1Fut8RnDlNYmDLb5oqDySz',
            },
            href: 'https://api.spotify.com/v1/albums/1Fut8RnDlNYmDLb5oqDySz',
            id: '1Fut8RnDlNYmDLb5oqDySz',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2732bb47476de70c0de9c9a29be',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e022bb47476de70c0de9c9a29be',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048512bb47476de70c0de9c9a29be',
                width: 64,
              },
            ],
            name: 'THIS YEAR (Blessings) [French Remix]',
            release_date: '2023-04-14',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:1Fut8RnDlNYmDLb5oqDySz',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5c0lDrNyT2RnFhujZpPIas',
              },
              href: 'https://api.spotify.com/v1/artists/5c0lDrNyT2RnFhujZpPIas',
              id: '5c0lDrNyT2RnFhujZpPIas',
              name: 'Victor Thompson',
              type: 'artist',
              uri: 'spotify:artist:5c0lDrNyT2RnFhujZpPIas',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5OLkn5GT6EcMuJzjwgvQnu',
              },
              href: 'https://api.spotify.com/v1/artists/5OLkn5GT6EcMuJzjwgvQnu',
              id: '5OLkn5GT6EcMuJzjwgvQnu',
              name: 'Vacra',
              type: 'artist',
              uri: 'spotify:artist:5OLkn5GT6EcMuJzjwgvQnu',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6QdzKE9cMAEFZj1pYcxpsf',
              },
              href: 'https://api.spotify.com/v1/artists/6QdzKE9cMAEFZj1pYcxpsf',
              id: '6QdzKE9cMAEFZj1pYcxpsf',
              name: "Ehis 'D' Greatest",
              type: 'artist',
              uri: 'spotify:artist:6QdzKE9cMAEFZj1pYcxpsf',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 134972,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'QM6N22300921',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/4cVnXm3iHSlOYRtHZcEEbj',
          },
          href: 'https://api.spotify.com/v1/tracks/4cVnXm3iHSlOYRtHZcEEbj',
          id: '4cVnXm3iHSlOYRtHZcEEbj',
          is_local: false,
          name: 'THIS YEAR (Blessings) - French Remix',
          popularity: 75,
          preview_url:
            'https://p.scdn.co/mp3-preview/1b211bfe3f8f4d02eb8017fc8ba1fd90987eadff?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:4cVnXm3iHSlOYRtHZcEEbj',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y',
                },
                href: 'https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y',
                id: '07YZf4WDAMNwqr4jfgOZ8y',
                name: 'Jason Derulo',
                type: 'artist',
                uri: 'spotify:artist:07YZf4WDAMNwqr4jfgOZ8y',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/2mpeljBig2IXLXRAFO9AAs',
                },
                href: 'https://api.spotify.com/v1/artists/2mpeljBig2IXLXRAFO9AAs',
                id: '2mpeljBig2IXLXRAFO9AAs',
                name: 'Dido',
                type: 'artist',
                uri: 'spotify:artist:2mpeljBig2IXLXRAFO9AAs',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/0BmbK3Ayd0Q9BWOCQYOdQw',
            },
            href: 'https://api.spotify.com/v1/albums/0BmbK3Ayd0Q9BWOCQYOdQw',
            id: '0BmbK3Ayd0Q9BWOCQYOdQw',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273028b9a72c08db84217babfb0',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02028b9a72c08db84217babfb0',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851028b9a72c08db84217babfb0',
                width: 64,
              },
            ],
            name: 'When Love Sucks (feat. Dido)',
            release_date: '2023-05-18',
            release_date_precision: 'day',
            total_tracks: 2,
            type: 'album',
            uri: 'spotify:album:0BmbK3Ayd0Q9BWOCQYOdQw',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y',
              },
              href: 'https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y',
              id: '07YZf4WDAMNwqr4jfgOZ8y',
              name: 'Jason Derulo',
              type: 'artist',
              uri: 'spotify:artist:07YZf4WDAMNwqr4jfgOZ8y',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2mpeljBig2IXLXRAFO9AAs',
              },
              href: 'https://api.spotify.com/v1/artists/2mpeljBig2IXLXRAFO9AAs',
              id: '2mpeljBig2IXLXRAFO9AAs',
              name: 'Dido',
              type: 'artist',
              uri: 'spotify:artist:2mpeljBig2IXLXRAFO9AAs',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 169645,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USAT22305231',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/59vMO9rkUuefwLMKzohNo5',
          },
          href: 'https://api.spotify.com/v1/tracks/59vMO9rkUuefwLMKzohNo5',
          id: '59vMO9rkUuefwLMKzohNo5',
          is_local: false,
          name: 'When Love Sucks (feat. Dido)',
          popularity: 75,
          preview_url:
            'https://p.scdn.co/mp3-preview/7e857493dc17d503c16edc7921f78865d99db549?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:59vMO9rkUuefwLMKzohNo5',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/3HqP3nd8WI0VfHRhApPlan',
                },
                href: 'https://api.spotify.com/v1/artists/3HqP3nd8WI0VfHRhApPlan',
                id: '3HqP3nd8WI0VfHRhApPlan',
                name: 'Trinix',
                type: 'artist',
                uri: 'spotify:artist:3HqP3nd8WI0VfHRhApPlan',
              },
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/6n45wsxj6sDedgwEyTza6d',
                },
                href: 'https://api.spotify.com/v1/artists/6n45wsxj6sDedgwEyTza6d',
                id: '6n45wsxj6sDedgwEyTza6d',
                name: 'Fafá de Belém',
                type: 'artist',
                uri: 'spotify:artist:6n45wsxj6sDedgwEyTza6d',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/3yP0Nsb8jyXY4HMNb6tkO9',
            },
            href: 'https://api.spotify.com/v1/albums/3yP0Nsb8jyXY4HMNb6tkO9',
            id: '3yP0Nsb8jyXY4HMNb6tkO9',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273635884f3123d858676bdab81',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02635884f3123d858676bdab81',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851635884f3123d858676bdab81',
                width: 64,
              },
            ],
            name: 'Emorio',
            release_date: '2023-04-28',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:3yP0Nsb8jyXY4HMNb6tkO9',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3HqP3nd8WI0VfHRhApPlan',
              },
              href: 'https://api.spotify.com/v1/artists/3HqP3nd8WI0VfHRhApPlan',
              id: '3HqP3nd8WI0VfHRhApPlan',
              name: 'Trinix',
              type: 'artist',
              uri: 'spotify:artist:3HqP3nd8WI0VfHRhApPlan',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6n45wsxj6sDedgwEyTza6d',
              },
              href: 'https://api.spotify.com/v1/artists/6n45wsxj6sDedgwEyTza6d',
              id: '6n45wsxj6sDedgwEyTza6d',
              name: 'Fafá de Belém',
              type: 'artist',
              uri: 'spotify:artist:6n45wsxj6sDedgwEyTza6d',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 163840,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'FR9W12310051',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/14VthBnru6kiREQUYAuNSL',
          },
          href: 'https://api.spotify.com/v1/tracks/14VthBnru6kiREQUYAuNSL',
          id: '14VthBnru6kiREQUYAuNSL',
          is_local: false,
          name: 'Emorio',
          popularity: 76,
          preview_url:
            'https://p.scdn.co/mp3-preview/aa7b2f323e4dec354416d354add83e5ec6fa8bfb?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:14VthBnru6kiREQUYAuNSL',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'album',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/3YwqjMyrRfuixi2pbgTGCE',
                },
                href: 'https://api.spotify.com/v1/artists/3YwqjMyrRfuixi2pbgTGCE',
                id: '3YwqjMyrRfuixi2pbgTGCE',
                name: "Heuss L'enfoiré",
                type: 'artist',
                uri: 'spotify:artist:3YwqjMyrRfuixi2pbgTGCE',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/65Zsfpx3BX9uriUQ5Nvuq7',
            },
            href: 'https://api.spotify.com/v1/albums/65Zsfpx3BX9uriUQ5Nvuq7',
            id: '65Zsfpx3BX9uriUQ5Nvuq7',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273e867057ecb11903ffe53224b',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02e867057ecb11903ffe53224b',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851e867057ecb11903ffe53224b',
                width: 64,
              },
            ],
            name: "Chef D'orchestre",
            release_date: '2023-06-30',
            release_date_precision: 'day',
            total_tracks: 14,
            type: 'album',
            uri: 'spotify:album:65Zsfpx3BX9uriUQ5Nvuq7',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3YwqjMyrRfuixi2pbgTGCE',
              },
              href: 'https://api.spotify.com/v1/artists/3YwqjMyrRfuixi2pbgTGCE',
              id: '3YwqjMyrRfuixi2pbgTGCE',
              name: "Heuss L'enfoiré",
              type: 'artist',
              uri: 'spotify:artist:3YwqjMyrRfuixi2pbgTGCE',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5gqmbbfjcikQBzPB5Hv13I',
              },
              href: 'https://api.spotify.com/v1/artists/5gqmbbfjcikQBzPB5Hv13I',
              id: '5gqmbbfjcikQBzPB5Hv13I',
              name: 'Gazo',
              type: 'artist',
              uri: 'spotify:artist:5gqmbbfjcikQBzPB5Hv13I',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 189840,
          episode: false,
          explicit: true,
          external_ids: {
            isrc: 'FR1DC2300200',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/2BvjmY4Mp5q1AHL0laetd6',
          },
          href: 'https://api.spotify.com/v1/tracks/2BvjmY4Mp5q1AHL0laetd6',
          id: '2BvjmY4Mp5q1AHL0laetd6',
          is_local: false,
          name: 'Saiyan',
          popularity: 75,
          preview_url:
            'https://p.scdn.co/mp3-preview/58d86b35819bf30c3cd3779b590511b3f672edd2?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 6,
          type: 'track',
          uri: 'spotify:track:2BvjmY4Mp5q1AHL0laetd6',
        },
        video_thumbnail: {
          url: null,
        },
      },
      {
        added_at: '2023-08-31T11:01:00Z',
        added_by: {
          external_urls: {
            spotify: 'https://open.spotify.com/user/',
          },
          href: 'https://api.spotify.com/v1/users/',
          id: '',
          type: 'user',
          uri: 'spotify:user:',
        },
        is_local: false,
        primary_color: null,
        track: {
          album: {
            album_type: 'single',
            artists: [
              {
                external_urls: {
                  spotify:
                    'https://open.spotify.com/artist/54NKhABnyGAvbek0n63TAu',
                },
                href: 'https://api.spotify.com/v1/artists/54NKhABnyGAvbek0n63TAu',
                id: '54NKhABnyGAvbek0n63TAu',
                name: 'Aden Foyer',
                type: 'artist',
                uri: 'spotify:artist:54NKhABnyGAvbek0n63TAu',
              },
            ],
            available_markets: ['AR', 'AU'],
            external_urls: {
              spotify: 'https://open.spotify.com/album/0oHwFrjiH6pkhFp8C4LWa3',
            },
            href: 'https://api.spotify.com/v1/albums/0oHwFrjiH6pkhFp8C4LWa3',
            id: '0oHwFrjiH6pkhFp8C4LWa3',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b27347ec34af123096d55e5391e8',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e0247ec34af123096d55e5391e8',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d0000485147ec34af123096d55e5391e8',
                width: 64,
              },
            ],
            name: 'The Ballet Girl',
            release_date: '2022-10-21',
            release_date_precision: 'day',
            total_tracks: 1,
            type: 'album',
            uri: 'spotify:album:0oHwFrjiH6pkhFp8C4LWa3',
          },
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/54NKhABnyGAvbek0n63TAu',
              },
              href: 'https://api.spotify.com/v1/artists/54NKhABnyGAvbek0n63TAu',
              id: '54NKhABnyGAvbek0n63TAu',
              name: 'Aden Foyer',
              type: 'artist',
              uri: 'spotify:artist:54NKhABnyGAvbek0n63TAu',
            },
          ],
          available_markets: ['AR', 'AU'],
          disc_number: 1,
          duration_ms: 201424,
          episode: false,
          explicit: false,
          external_ids: {
            isrc: 'USQX92206389',
          },
          external_urls: {
            spotify: 'https://open.spotify.com/track/3aiOu3VFNOD9omIGG7nSq1',
          },
          href: 'https://api.spotify.com/v1/tracks/3aiOu3VFNOD9omIGG7nSq1',
          id: '3aiOu3VFNOD9omIGG7nSq1',
          is_local: false,
          name: 'The Ballet Girl',
          popularity: 77,
          preview_url:
            'https://p.scdn.co/mp3-preview/6d30d10cb20ee42c46008b5f25e6a9ce141d2ee4?cid=8d87635387164a479f08a30d3ea8c944',
          track: true,
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:3aiOu3VFNOD9omIGG7nSq1',
        },
        video_thumbnail: {
          url: null,
        },
      },
    ],
    limit: 100,
    next: null,
    offset: 0,
    previous: null,
    total: 50,
  },
  type: 'playlist',
  uri: 'spotify:playlist:37i9dQZF1DWVuV87wUBNwc',
};
