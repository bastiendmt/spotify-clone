import { Link } from 'react-router-dom';
import { PlaylistType } from '../../../types/playlist.interface';
import styles from './ListItem.module.scss';

interface ListItemProps {
  playlist: PlaylistType;
}

const ListItem = ({ playlist }: ListItemProps): JSX.Element => (
  <Link to={`/playlist/${playlist.id}`} className={styles.ListItem}>
    <li className={styles.Item}>
      <span className={styles.Title}>{playlist.name}</span>
    </li>
  </Link>
);

export default ListItem;
