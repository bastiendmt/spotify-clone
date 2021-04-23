import React from "react";
import { HeartEmpty } from "../../assets/HeartEmpty";
import styles from './Player.module.css'

const Player = () => {
  return <div className={styles.Player}>
      <footer>
          <div className={styles.Song}>
            <div className={styles.Song_Img}>
              <img src="https://bigcats.be/images/resized/750x-header-cat.jpg" alt='song' />
            </div>
            <div className={styles.Song_Infos}>
              <div className={styles.Sonf_Infos_Name}>Song</div>
              <div className={styles.Sonf_Infos_Artist}>Artist</div>
            </div>
            <div className={styles.Song_Like}><HeartEmpty /></div>
            </div>
          <div className={styles.Controls}>Controls</div>
          <div className={styles.Volume}>Volume</div>
      </footer>
  </div>;
};

export default Player;
