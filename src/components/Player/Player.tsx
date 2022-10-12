import { useEffect, useRef, useState } from "react";
import { Like } from "../../assets/Like";
import { Pause } from "../../assets/Pause";
import { Play } from "../../assets/Play";
import { Volume } from "../../assets/Volume";
import { VolumeMuted } from "../../assets/VolumeMuted";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { playpause } from "../../store/reducers/playing.reducer";
import { millisToMinutesAndSeconds } from "../../utils/msToMinutes";
import { useBar } from "../../utils/useBar";
import useStopwatch from "../../utils/useStopwatch";
import styles from "./Player.module.scss";

const Player = () => {
  const { song, playing } = useAppSelector((state) => state.playing);
  const audioEml = useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();

  const timeRef = useRef<HTMLDivElement | null>(null);
  const barCallBack = useBar;

  const [progress, setProgress] = useState(0);
  const [currentTime, resetTime, toggleStopwatch] = useStopwatch();

  const [volume, setVolume] = useState(70);
  const volumeRef = useRef<HTMLDivElement | null>(null);
  const [mute, setMute] = useState(false);

  //If the songs changes, plays it
  useEffect(() => {
    audioEml.current?.play();
    resetTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song]);

  //Handles play / pause
  useEffect(() => {
    if (playing) {
      audioEml.current?.play();
      toggleStopwatch(true);
    } else {
      audioEml.current?.pause();
      toggleStopwatch(false);
    }
  }, [playing, toggleStopwatch]);

  // Adjust progress bar when playing
  useEffect(() => {
    setProgress((currentTime * 100) / 30000);
  }, [currentTime]);

  useEffect(() => {
    if (volume < 5) {
      setMute(true);
    } else {
      setMute(false);
    }
  }, [volume]);

  return (
    <>
      {!song && null}
      {song && (
        <div className={styles.Player}>
          <footer>
            <div className={styles.Song}>
              <div className={styles.Img}>
                <img src={song.track.album.images[0].url} alt="song" />
              </div>
              <div className={styles.Infos}>
                <div className={styles.Name}>{song.track.name}</div>
                <div className={styles.Artist}>
                  {song.track.artists[0].name}
                </div>
              </div>
              <div className={styles.Like}>
                <Like />
              </div>
            </div>

            <div className={styles.Controls}>
              <audio ref={audioEml} src={song.track.preview_url} />
              <div>
                <button onClick={() => dispatch(playpause())}>
                  {playing ? <Pause /> : <Play />}
                </button>
              </div>
              <div className={styles.BarContainer}>
                <div>{millisToMinutesAndSeconds(currentTime)}</div>
                <div
                  className={styles.Wrapper}
                  onClick={(event) => barCallBack(event, timeRef, setProgress)}
                  ref={timeRef}
                >
                  <div className={styles.Bar}>
                    <div
                      className={styles.Progress}
                      style={{ transform: `translateX(-${100 - progress}%)` }}
                    />
                  </div>
                  <button style={{ left: `${progress}%` }} />
                </div>
                <div>0:30</div>
              </div>
            </div>

            <div className={styles.Volume}>
              <div>
                <button onClick={() => setMute(!mute)}>
                  {mute ? <VolumeMuted /> : <Volume />}
                </button>
              </div>
              <div
                className={styles.Wrapper}
                onClick={(event) => barCallBack(event, volumeRef, setVolume)}
                ref={volumeRef}
              >
                <div className={styles.Bar}>
                  <div
                    className={styles.Progress}
                    style={{
                      transform: `translateX(-${mute ? "100" : 100 - volume}%)`,
                    }}
                  />
                </div>
                <button style={{ left: `${mute ? "0" : volume}%` }} />
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Player;
