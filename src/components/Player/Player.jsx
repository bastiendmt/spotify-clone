import React from "react";
import styles from './Player.module.css'

const Player = () => {
  return <div className={styles.Player}>
      <footer>
          <div className={styles.Song}>Song</div>
          <div className={styles.Controls}>Controls</div>
          <div className={styles.Volume}>Volume</div>
      </footer>
  </div>;
};

export default Player;
