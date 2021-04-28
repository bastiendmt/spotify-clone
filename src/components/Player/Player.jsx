import React from "react";
import { connect } from "react-redux";
import { Like } from "../../assets/Like";
import { Play } from "../../assets/Play";
import { Pause } from "../../assets/Pause";
import { Volume } from "../../assets/Volume";
import styles from "./Player.module.scss";
import Sound from "react-sound";

const Player = ({ playPause, song, playing }) => {
  if (!song) {
    return null;
  } else {
    return (
      <div className={styles.Player}>
        <footer>
          <div className={styles.Song}>
            <div className={styles.Img}>
              <img src={song.track.album.images[0].url} alt="song" />
            </div>
            <div className={styles.Infos}>
              <div className={styles.Name}>{song.track.name}</div>
              <div className={styles.Artist}>{song.track.artists[0].name}</div>
            </div>
            <div className={styles.Like}>
              <Like />
            </div>
          </div>

          <div className={styles.Controls}>
            <div>
              <button onClick={playPause}>
                {playing ? <Pause /> : <Play />}
              </button>
            </div>
            <div className={styles.BarContainer}>
              <div>0</div>
              <div className={styles.Bar}></div>
              <div>0:30</div>
            </div>
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
        <Sound
          url={song.track.preview_url}
          playStatus={playing ? "PLAYING" : "PAUSED"}
          position
          onPlaying={({ position, duration }) => {
            console.log("playing song" + position + " / " + duration);
          }}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    song: state.playing.song,
    playing: state.playing.playing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playPause: () => dispatch({ type: "playpause" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
