import styles from "./SideBar.module.scss";
import { Logo } from "../../assets/Logo";
import ListItem from "./ListItem/ListItem";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Playlist } from "../../types/Playlist";

type SideBarProps = {
  playlists: Playlist[];
};

const SideBar = ({ playlists }: SideBarProps) => {
  return (
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
          {playlists?.map((item: Playlist) => {
            return <ListItem playlist={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { playlists: { playlists: Playlist[] } }) => {
  return {
    playlists: state.playlists.playlists,
  };
};

export default connect(mapStateToProps)(SideBar);
