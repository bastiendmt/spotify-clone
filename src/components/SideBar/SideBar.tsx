import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import type { PlaylistTrackDetails } from '../../types/playlists.interface';
import styles from './SideBar.module.scss';

const SideBar = ({ playlists }: { playlists: PlaylistTrackDetails[] }) => (
  <div className={styles.SideBar}>
    <Link
      style={{ textDecoration: 'none', color: 'white' }}
      to="/"
      aria-label="Homepage"
      className={styles.Logo}
    >
      <Logo />
    </Link>
    <h1 className={styles.Title}>Playlists</h1>
    <hr className={styles.Separator} />
    <nav className={styles.List}>
      {playlists.map((item) => (
        <ListItem playlist={item} key={item.id} />
      ))}
    </nav>
  </div>
);

const ListItem = ({ playlist }: { playlist: PlaylistTrackDetails }) => (
  <Link to={`/playlist/${playlist.id}`} className={styles.ListItem}>
    <span className={styles.ItemTitle}>{playlist.name}</span>
  </Link>
);

export default SideBar;
