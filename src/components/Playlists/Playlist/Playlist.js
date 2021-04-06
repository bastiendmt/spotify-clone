import { Link } from "react-router-dom";
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
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
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
