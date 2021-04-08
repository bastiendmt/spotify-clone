import axios from "axios";
// const baseUrl = "https://afternoon-waters-49321.herokuapp.com";

export async function GetPlaylists() {
  return axios
    .get("http://localhost:3030/playlists")
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function GetPlaylistDetail(idPlayslit) {
  return axios
    .get("http://localhost:3030/playlist/" + idPlayslit)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
