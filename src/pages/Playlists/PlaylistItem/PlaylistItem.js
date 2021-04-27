import { Link } from "react-router-dom";
import Play from "../../../assets/Play";
import styles from "./PlaylistItem.module.css";

const PlaylistItem = (props) => {
  return (
    <Link to={`/playlist/${props.playlist.id}`} className={styles.LinkPlaylist}>
      <div className={styles.Playlist}>
        <div className={styles.imgContainer}>
          <img
            src={props.playlist.images[0].url}
            alt="Tokyo"
            className={styles.Img}
          />
          <div className={styles.PlayContainer}>
            <button className={styles.PlayButton} title="Play">
              <Play />
            </button>
          </div>
        </div>
        <div className={styles.Name}>{props.playlist.name}</div>
        <div className={styles.Artist}>
          {props.playlist.owner?.display_name}
        </div>
      </div>
    </Link>
  );
};

export default PlaylistItem;
