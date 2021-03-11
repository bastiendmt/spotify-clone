import axios from 'axios'
const baseUrl = 'https://afternoon-waters-49321.herokuapp.com';

export async function GetPlaylists() {
    return axios.get('http://localhost:3030/playlists')
        .then(response => {
            return response.data
        })
        .catch(e => {
            console.log(e);
        })
}


export async function GetCustom() {

}

export async function GetPlaylistDetail(idPlayslit) {
    let url = baseUrl + '/v1/playlists/' + idPlayslit;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}