import { connect } from "react-redux";
import { Playlist as PlaylistType } from "../../types/Playlist";
import Playlist from "./PlaylistItem/PlaylistItem";
import styles from "./Playlists.module.scss";

type PlaylistsProps = {
  playlists: PlaylistType[];
};

const Playlists = ({ playlists }: PlaylistsProps) => {
  return (
    <div className={styles.Playlists}>
      <h1 className={styles.Title}>Playlists</h1>

      <div className={styles.Container}>
        {playlists?.map((item: PlaylistType) => (
          <Playlist key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  playlists: { playlists: PlaylistType[] };
}) => {
  return {
    playlists: state.playlists.playlists,
  };
};

export default connect(mapStateToProps)(Playlists);
