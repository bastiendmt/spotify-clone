import { Link } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { Playlist } from "../../types/playlist.interface";
import { Playlists } from "../../types/playlists.interface";
import ListItem from "./ListItem/ListItem";
import styles from "./SideBar.module.scss";

const SideBar = ({ playlists }: { playlists: Playlists }) => (
  <div className={styles.SideBar}>
    <Link style={{ textDecoration: "none", color: "white" }} to="/">
      <div className={styles.Logo}>
        <Logo />
      </div>
    </Link>
    <h1 className={styles.Title}>Playlists</h1>
    <hr className={styles.Separator} />
    <div className={styles.ListContainer}>
      <ul className={styles.List}>
        {playlists?.items?.map((item: Playlist) => (
          <ListItem playlist={item} key={item.id} />
        ))}
      </ul>
    </div>
  </div>
);

export default SideBar;
