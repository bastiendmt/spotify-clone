import axios from "axios";
import qs from "qs";
import Cookies from "universal-cookie";
const baseUrl = "https://api.spotify.com/v1";

const cookies = new Cookies();

async function getAuthorizationToken() {
  return axios
    .post(
      "https://accounts.spotify.com/api/token",
      qs.stringify({
        grant_type: "client_credentials",
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(function (response) {
      cookies.set("auth", response.data.access_token, {
        maxAge: response.data.expires_in,
      });
    });
}

const getAuth = async () => {
  let auth = cookies.get("auth");

  if (!auth) {
    await getAuthorizationToken();
    auth = cookies.get("auth");
  }

  return auth;
};

export async function GetPlaylists() {
  const auth = await getAuth();

  return axios
    .get(baseUrl + "/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function GetPlaylistDetail(idPlayslit: string) {
  const auth = await getAuth();

  return axios
    .get(baseUrl + "/playlists/" + idPlayslit, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
