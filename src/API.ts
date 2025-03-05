import axios from 'axios';
import qs from 'qs';
import Cookies from 'universal-cookie';
import type { PlaylistType } from './types/playlist.interface';
import type { UserPlaylistsType } from './types/playlists.interface';

const BASE_URL = 'https://api.spotify.com/v1';
const cookies = new Cookies();

const getAuthorizationToken = async (): Promise<void> => {
  await axios
    .post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    .then((response) => {
      cookies.set('auth', response.data.access_token, {
        maxAge: response.data.expires_in,
      });
    });
};

/**
 * Read bearer token from cookies
 */
const getAuth = async (): Promise<string> => {
  let auth: string = cookies.get('auth');
  if (auth === undefined) {
    await getAuthorizationToken();
    auth = cookies.get('auth');
  }

  return auth;
};

export const GetUserPlaylists = async (
  user: string,
): Promise<UserPlaylistsType> => {
  const auth = await getAuth();
  return axios
    .get(`${BASE_URL}/users/${user}/playlists`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const GetPlaylistDetail = async (
  playlistID: string,
): Promise<PlaylistType> => {
  const auth = await getAuth();
  return axios
    .get(`${BASE_URL}/playlists/${playlistID}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => response.data);
};
