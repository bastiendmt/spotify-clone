import { Link } from 'react-router-dom';
import { PlaylistType } from '../../../types/playlist.interface';
import styles from './ListItem.module.scss';

const ListItem = ({ playlist }: { playlist: PlaylistType }) => (
  <Link to={`/playlist/${playlist.id}`} className={styles.ListItem}>
    <li className={styles.Item}>
      <span className={styles.Title}>{playlist.name}</span>
    </li>
  </Link>
);

export default ListItem;
