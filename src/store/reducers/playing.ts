import { Track } from "../../types/Track";

const playingReducer = (
  state = {
    song: null,
    playing: true,
  },
  action: { type: "load" | "playpause"; song: Track }
) => {
  switch (action.type) {
    case "load":
      return {
        playing: true,
        song: action.song,
      };
    case "playpause":
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
};

export default playingReducer;
