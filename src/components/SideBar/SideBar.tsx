import { Link } from 'react-router-dom';
import { Logo } from '../../assets';
import { PlaylistType } from '../../types/playlist.interface';
import { PlaylistsType } from '../../types/playlists.interface';
import ListItem from './ListItem/ListItem';
import styles from './SideBar.module.scss';

const SideBar = ({ playlists }: { playlists: PlaylistsType }) => (
  <div className={styles.SideBar}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
      <div className={styles.Logo}>
        <Logo />
      </div>
    </Link>
    <h1 className={styles.Title}>Playlists</h1>
    <hr className={styles.Separator} />
    <div className={styles.ListContainer}>
      <ul className={styles.List}>
        {playlists.items?.map((item: PlaylistType) => (
          <ListItem playlist={item} key={item.id} />
        ))}
      </ul>
    </div>
  </div>
);

export default SideBar;
