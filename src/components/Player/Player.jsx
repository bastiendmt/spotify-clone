import React from "react";
import { HeartEmpty } from "../../assets/HeartEmpty";
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
          <div className={styles.Song_Like}>
            <HeartEmpty />
          </div>
        </div>

        <div className={styles.Controls}>
          <div>
            <button>
              <svg
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                class="Svg-ulyrgf-0 dIsYZz"
              >
                <path d="M4.018 14L14.41 8 4.018 2z"></path>
              </svg>
            </button>
          </div>
          <div className={styles.Bar}>
            <hr />
          </div>
        </div>

        <div className={styles.Volume}>
          Volume
          </div>
      </footer>
    </div>
  );
};

export default Player;
