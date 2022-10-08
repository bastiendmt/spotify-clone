import { useEffect, useRef, useState } from "react";
import Sound from "react-sound";
import { Like } from "../../assets/Like";
import { Pause } from "../../assets/Pause";
import { Play } from "../../assets/Play";
import { Volume } from "../../assets/Volume";
import { VolumeMuted } from "../../assets/VolumeMuted";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { playpause } from "../../store/reducers/playing.reducer";
import { millisToMinutesAndSeconds } from "../../utils/msToMinutes";
import { useBar } from "../../utils/useBar";
import styles from "./Player.module.scss";

const Player = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const volumeRef = useRef<HTMLDivElement | null>(null);
  const [mute, setMute] = useState(false);

  const barCallBack = useBar;

  const { song, playing } = useAppSelector((state) => state.playing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Adjust time when progress bar is clicked
    setTime((progress * 30000) / 100);
  }, [progress]);

  useEffect(() => {
    //Reset progress if the song change
    setProgress(0);
    setTime(0);
  }, [song]);

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
              <div>
                <button onClick={() => dispatch(playpause())}>
                  {playing ? <Pause /> : <Play />}
                </button>
              </div>
              <div className={styles.BarContainer}>
                <div>{millisToMinutesAndSeconds(time)}</div>
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
          {song.track.preview_url && (
            <Sound
              url={song.track.preview_url}
              playStatus={playing ? "PLAYING" : "PAUSED"}
              //@ts-ignore
              onPlaying={({ position }) => {
                setTime(position);
                setProgress((position * 100) / 30000);
              }}
              onFinishedPlaying={() => dispatch(playpause())}
              volume={mute ? 0 : volume}
              position={time}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Player;
