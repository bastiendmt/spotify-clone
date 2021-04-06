import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../../Assets/Logo";
import ListItem from "./ListItem/ListItem";

import { connect } from "react-redux";

const SideBar = (props) => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.Logo}>
        <Logo />
      </div>

      <h1 className={styles.Title}>Playlists</h1>

      <hr className={styles.Separator}></hr>

      <div className={styles.ListContainer}>
        <ul className={styles.List}>
          {props.playlists?.map((item) => {
            return <ListItem playlist={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

export default connect(mapStateToProps)(SideBar);
