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
          <div className={styles.Like}>
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
          <div className={styles.Bar}></div>
        </div>

        <div className={styles.Volume}>
          <div>
            <button>
              <svg
                role="presentation"
                height="16"
                width="16"
                aria-label="Volume high"
                id="volume-icon"
                viewBox="0 0 16 16"
                class="Svg-ulyrgf-0 dIsYZz"
              >
                <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
              </svg>
            </button>
          </div>
          <div className={styles.VolumeBar}></div>
        </div>
      </footer>
    </div>
  );
};

export default Player;
