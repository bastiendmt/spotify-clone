import { Link } from "react-router-dom";
import { Play } from "../../../assets/Play";
import { Playlist } from "../../../types/Playlist";
import styles from "./PlaylistItem.module.scss";

type PlaylistItemProps = {
  playlist: Playlist;
};

const PlaylistItem = ({ playlist }: PlaylistItemProps) => {
  return (
    <Link to={`/playlist/${playlist.id}`} className={styles.LinkPlaylist}>
      <div className={styles.Playlist}>
        <div className={styles.imgContainer}>
          <img
            src={playlist.images[0].url}
            alt="Tokyo"
          />
          <div className={styles.PlayContainer}>
            <button className={styles.PlayButton} title="Play">
              <Play />
            </button>
          </div>
        </div>
        <div className={styles.Name}>{playlist.name}</div>
        <div className={styles.Artist}>{playlist.owner?.display_name}</div>
      </div>
    </Link>
  );
};

export default PlaylistItem;
