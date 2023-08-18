import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { PlaylistType } from '../../types/playlist.interface';
import { PlaylistsType } from '../../types/playlists.interface';
import ListItem from './ListItem/ListItem';
import styles from './SideBar.module.scss';

const SideBar = ({ playlists }: { playlists: PlaylistsType }) => (
  <div className={styles.SideBar}>
    <Link
      style={{ textDecoration: 'none', color: 'white' }}
      to='/'
      aria-label='Homepage'
      className={styles.Logo}
    >
      <Logo />
    </Link>
    <h1 className={styles.Title}>Playlists</h1>
    <hr className={styles.Separator} />
    {playlists.items?.map((item: PlaylistType) => (
      <ListItem playlist={item} key={item.id} />
    ))}
  </div>
);

export default SideBar;
