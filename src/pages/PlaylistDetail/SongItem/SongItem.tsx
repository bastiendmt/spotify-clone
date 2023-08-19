import { ReactComponent as Play } from '../../../assets/play.svg';
import { Track } from '../../../types/track.interface';
import formatDate from '../../../utils/formatDate';
import msToMinutesAndSeconds from '../../../utils/msToMinutes';
import styles from './SongItem.module.scss';

interface SongItemPros {
  current: boolean;
  index: number;
  song: Track;
  songClicked: () => void;
}

const SongItem = ({ song, index, songClicked, current }: SongItemPros) => (
  <div
    className={[
      styles.Item,
      song.track.preview_url !== '' ? styles.Enabled : styles.Disabled,
    ].join(' ')}
    role='button'
    tabIndex={0}
    onClick={songClicked}
    onKeyDown={songClicked}
  >
    <div className={styles.Index}>
      <span className={current ? 'playing' : ''}>{index + 1}</span>
      <button type='button'>
        <Play />
      </button>
    </div>

    <div className={styles.Title}>
      <img src={song.track.album.images[0].url} alt='cover img' />
      <div className={styles.NameContainer}>
        <div className={styles.Name}>
          <span className={current ? 'playing' : ''}>{song.track.name}</span>
        </div>
        {song.track.explicit && <span className={styles.Explicit}>e</span>}
        <span
          className={[
            styles.Artist,
            song.track.explicit ? styles.Artist_sub : styles.Artist_badge,
          ].join(', ')}
        >
          {song.track.artists[0].name}
        </span>
      </div>
    </div>
    <div>{song.track.album.name}</div>
    <div>{formatDate(song.added_at)}</div>
    <div className={styles.Length}>
      {msToMinutesAndSeconds(song.track.duration_ms)}
      <button type='button' className={styles.More}>
        ...
      </button>
    </div>
  </div>
);

export default SongItem;
