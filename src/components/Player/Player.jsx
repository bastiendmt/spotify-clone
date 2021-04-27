import React from "react";
import { HeartEmpty } from "../../assets/HeartEmpty";
import { Like } from "../../assets/Like";
import { Volume } from "../../assets/Volume";
import styles from "./Player.module.scss";

const Player = () => {
  return (
    <div className={styles.Player}>
      <footer>
        <div className={styles.Song}>
          <div className={styles.Img}>
            <img
              src="https://bigcats.be/images/resized/750x-header-cat.jpg"
              alt="song"
            />
          </div>
          <div className={styles.Infos}>
            <div className={styles.Name}>Song</div>
            <div className={styles.Artist}>Artist</div>
          </div>
          <div className={styles.Like}>
            <HeartEmpty />
          </div>
        </div>

        <div className={styles.Controls}>
          <div>
            <button>
              <Like />
            </button>
          </div>
          <div className={styles.Bar}></div>
        </div>

        <div className={styles.Volume}>
          <div>
            <button>
              <Volume />
            </button>
          </div>
          <div className={styles.VolumeBar}></div>
        </div>
      </footer>
    </div>
  );
};

export default Player;
