import { Playlists } from "../../types/Playlists";

const playlistReducer = (
  state = {
    playlists: [],
  },
  action: { type: "init"; playlists: Playlists }
) => {
  switch (action.type) {
    case "init":
      return { playlists: action.playlists };
    default:
      return state;
  }
};

export default playlistReducer;
