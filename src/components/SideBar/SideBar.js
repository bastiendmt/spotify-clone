import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../../assets/Logo";
import ListItem from "./ListItem/ListItem";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className={styles.SideBar}>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <div className={styles.Logo}>
          <Logo />
        </div>
      </Link>

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
