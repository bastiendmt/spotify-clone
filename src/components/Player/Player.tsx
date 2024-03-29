import { type ElementRef, useEffect, useRef, useState } from 'react';
import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Pause } from '../../assets/pause.svg';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Volume } from '../../assets/volume.svg';
import { ReactComponent as VolumeMuted } from '../../assets/volumeMuted.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  playPause,
  selectCurrentSong,
} from '../../store/reducers/currentSong.slice';
import msToMinutesAndSeconds from '../../utils/msToMinutes';
import useBar from '../../utils/useBar';
import useStopwatch from '../../utils/useStopwatch';
import styles from './Player.module.scss';

const Player = () => {
  const dispatch = useAppDispatch();
  const { song, playing } = useAppSelector(selectCurrentSong);
  const audioEml = useRef<ElementRef<'audio'>>(null);

  const timeRef = useRef<ElementRef<'div'>>(null);
  const barCallBack = useBar;

  const [progress, setProgress] = useState(0);
  const [currentTime, resetTime, toggleStopwatch] = useStopwatch();

  const [volume, setVolume] = useState(70);
  const volumeRef = useRef<ElementRef<'div'>>(null);
  const [mute, setMute] = useState(false);

  // If the songs changes, plays it
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    audioEml.current?.play().catch(() => {
      console.log('Unable to play');
    });
    resetTime();
  }, [song]);

  // Handles play / pause
  useEffect(() => {
    if (playing) {
      audioEml.current?.play().catch(() => {
        console.log('Unable to play');
      });
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
      {song == null && null}
      {song != null && (
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
              <audio ref={audioEml} src={song.track.preview_url}>
                <track kind="captions" />
              </audio>
              <button type="button" onClick={() => dispatch(playPause())}>
                {playing ? <Pause /> : <Play />}
              </button>
              <div className={styles.BarContainer}>
                <div>{msToMinutesAndSeconds(currentTime)}</div>
                <div
                  className={styles.Wrapper}
                  onClick={(event) => barCallBack(event, timeRef, setProgress)}
                  onKeyDown={() => dispatch(playPause())}
                  role="button"
                  tabIndex={0}
                  ref={timeRef}
                >
                  <div className={styles.Bar}>
                    <div
                      className={styles.Progress}
                      style={{ transform: `translateX(-${100 - progress}%)` }}
                    />
                  </div>
                  <button type="button" style={{ left: `${progress}%` }} />
                </div>
                <div>0:30</div>
              </div>
            </div>

            <div className={styles.Volume}>
              <button type="button" onClick={() => setMute(!mute)}>
                {mute ? <VolumeMuted /> : <Volume />}
              </button>
              <div
                className={styles.Wrapper}
                onClick={(event) => barCallBack(event, volumeRef, setVolume)}
                onKeyDown={() => setMute(!mute)}
                ref={volumeRef}
                role="button"
                tabIndex={0}
              >
                <div className={styles.Bar}>
                  <div
                    className={styles.Progress}
                    style={{
                      transform: `translateX(-${mute ? '100' : 100 - volume}%)`,
                    }}
                  />
                </div>
                <button
                  type="button"
                  style={{ left: `${mute ? '0' : volume}%` }}
                />
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Player;
