import type { PlaylistTrackDetails } from '../../types/playlists.interface';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import styles from './Playlists.module.scss';

const Playlists = ({
  message,
  playlists,
}: {
  message: string;
  playlists: PlaylistTrackDetails[];
}) => (
  <div className={styles.Playlists}>
    <h1 className={styles.Title}>{message}</h1>
    <div className={styles.Container}>
      {playlists.map((item) => (
        <PlaylistItem key={item.id} playlist={item} />
      ))}
    </div>
  </div>
);

export default Playlists;
