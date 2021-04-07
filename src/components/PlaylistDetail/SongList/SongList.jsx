import React from "react";
import styles from "./SongList.module.css";

export const SongList = () => {
  return (
    <div className={styles.SongListContainer}>
      <div>1</div>
      <div>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273e49b1bcaa060156dd2019e17"
          alt="cover img"
        />
        Title
      </div>
      <div>Album</div>
      <div>Date</div>
      <div>3:60</div>
    </div>
  );
};
