import axios from "axios";
import qs from "qs";
import Cookies from "universal-cookie";
import { PlaylistType } from "./types/playlist.interface";
import { FeaturedPlaylistsResponse } from "./types/playlists.interface";

const BASE_URL = "https://api.spotify.com/v1";
const cookies = new Cookies();

const getAuthorizationToken = async () => {
  axios
    .post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({
        grant_type: "client_credentials",
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      cookies.set("auth", response.data.access_token, {
        maxAge: response.data.expires_in,
      });
    });
};

const getAuth = async (): Promise<string> => {
  let auth: string = cookies.get("auth");
  if (!auth) {
    await getAuthorizationToken();
    auth = cookies.get("auth");
  }
  return auth;
};

export const GetFeaturedPlaylists =
  async (): Promise<FeaturedPlaylistsResponse> => {
    const auth = await getAuth();
    return axios
      .get(`${BASE_URL}/browse/featured-playlists`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((response) => response.data)
      .catch((e) => console.log(e));
  };

//TODO return type
export const GetPlaylistDetail = async (
  playlistID: string
): Promise<PlaylistType> => {
  const auth = await getAuth();
  return axios
    .get(`${BASE_URL}/playlists/${playlistID}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => response.data)
    .catch((e) => console.log(e));
};
