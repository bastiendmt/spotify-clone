import { Link } from 'react-router-dom';
import Play from '../../../assets/play.svg?react';
import type { PlaylistTrackDetails } from '../../../types/playlists.interface';
import styles from './PlaylistItem.module.scss';

const PlaylistItem = ({ playlist }: { playlist: PlaylistTrackDetails }) => (
  <Link to={`/playlist/${playlist.id}`} className={styles.LinkPlaylist}>
    <div className={styles.imgContainer}>
      <img src={playlist.images[0].url} alt="Tokyo" />
      <div className={styles.PlayContainer}>
        <button type="button" className={styles.PlayButton} title="Play">
          <Play />
        </button>
      </div>
    </div>
    <div className={styles.Name}>{playlist.name}</div>
    <div className={styles.Artist}>{playlist.owner?.display_name}</div>
  </Link>
);

export default PlaylistItem;
