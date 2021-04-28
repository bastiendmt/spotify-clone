import React from "react";
import styles from "./SongItem.module.scss";
import { millisToMinutesAndSeconds } from "../../../utils/msToMinutes";
import { formatDate } from "../../../utils/formatDate";
import { Play } from "../../../assets/Play";

export const SongItem = ({ song, index, songClicked }) => {
  return (
    <>
      {song && (
        <div className={styles.Item} onClick={songClicked}>
          <div className={styles.Index}>
            <span>{index + 1} </span>
            <button>
              <Play />
            </button>
          </div>

          <div className={styles.Title}>
            <img src={song.track.album.images[0].url} alt="cover img" />
            <div className={styles.NameContainer}>
              <div className={styles.Name}>
                <span>{song.track.name}</span>
              </div>
              {song.track.explicit && (
                <span className={styles.Explicit}>e</span>
              )}
              <span
                className={[
                  styles.Artist,
                  song.track.explicit
                    ? styles.Artist_sub
                    : styles.Artist_badg,
                ]}
              >
                {song.track.artists[0].name}
              </span>
            </div>
          </div>
          <div>{song.track.album.name}</div>
          <div>{formatDate(song.added_at)}</div>
          <div className={styles.Length}>
            {millisToMinutesAndSeconds(song.track.duration_ms)}
            <button className={styles.More}>...</button>
          </div>
        </div>
      )}
    </>
  );
};
