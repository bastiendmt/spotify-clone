import React from "react";
import styles from "./SongItem.module.css";
import { millisToMinutesAndSeconds } from "../../../utils/msToMinutes";
import { formatDate } from "../../../utils/formatDate";

export const SongItem = ({ song, index, songClicked }) => {
  return (
    <>
      {song && (
        <div className={styles.SongListContainer} onClick={songClicked}>
          <div>{index + 1}</div>
          <div className={styles.SongInfos}>
            <img src={song.track.album.images[0].url} alt="cover img" />
            <div className={styles.SongNameContainer}>
              <div className={styles.SongName}>
                <span>{song.track.name}</span>
              </div>
              {song.track.explicit && (
                <span className={styles.SongExplicit}>e</span>
              )}
              <span
                className={[
                  styles.SongArtist,
                  song.track.explicit
                    ? styles.SongArtist_sub
                    : styles.SongArtist_badg,
                ]}
              >
                {song.track.artists[0].name}
              </span>
            </div>
          </div>
          <div>{song.track.album.name}</div>
          <div>{formatDate(song.added_at)}</div>
          <div className={styles.SongInfos_Length}>
            {millisToMinutesAndSeconds(song.track.duration_ms)}
            <button className={styles.SongInfos_More}>...</button>
          </div>
        </div>
      )}
    </>
  );
};
