import React from "react";
import { connect } from "react-redux";
import { Like } from "../../assets/Like";
import { Play } from "../../assets/Play";
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
            <Like />
          </div>
        </div>

        <div className={styles.Controls}>
          <div>
            <button>
              <Play />
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

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

export default connect(mapStateToProps)(Player);
