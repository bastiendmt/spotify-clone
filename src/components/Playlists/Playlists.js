import React from "react";
import { connect } from "react-redux";
import Playlist from "./PlaylistItem/PlaylistItem";
import styles from "./Playlists.module.css";

const Playlists = (props) => {
  return (
    <div className={styles.Playlists}>
      <h1 className={styles.Title}>Playlists</h1>

      <div className={styles.Container}>
        {props.playlists?.map((item) => (
          <Playlist key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

export default connect(mapStateToProps)(Playlists);
