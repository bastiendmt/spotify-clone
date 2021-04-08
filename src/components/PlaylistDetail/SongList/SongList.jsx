import React from "react";
import styles from "./SongList.module.css";

export const SongList = ({ song }) => {
  console.log(song);
  return (
    <>
      {song && (
        <div className={styles.SongListContainer}>
          <div>1</div>
          <div>
            <img src={song.track.album.images[2].url} alt="cover img" />
            {song.track.name}
          </div>
          <div>{song.track.album.name}</div>
          <div>Date</div>
          <div>{song.track.duration_ms}</div>
        </div>
      )}
    </>
  );
};
