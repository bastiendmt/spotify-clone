import { Link } from "react-router-dom";
import PlayButton from "../../../assets/PlayButton";
import styles from "./Playlist.module.css";

const Playlist = (props) => {
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
              <PlayButton />
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

export default Playlist;
