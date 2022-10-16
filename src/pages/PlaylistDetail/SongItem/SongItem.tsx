import { Play } from '../../../assets';
import { Track } from '../../../types/track.interface';
import formatDate from '../../../utils/formatDate';
import millisToMinutesAndSeconds from '../../../utils/msToMinutes';
import styles from './SongItem.module.scss';

interface SongItemPros {
  song: Track;
  index: number;
  songClicked: () => void;
  current: boolean;
}

const SongItem = ({
  song,
  index,
  songClicked,
  current,
}: SongItemPros): JSX.Element => (
  <div
    className={[
      styles.Item,
      song.track.preview_url !== '' ? styles.Enabled : styles.Disabled,
    ].join(' ')}
    role="button"
    tabIndex={0}
    onClick={songClicked}
    onKeyDown={songClicked}
  >
    <div className={styles.Index}>
      <span style={current ? { color: '#1db954' } : { color: 'white' }}>
        {index + 1}
      </span>
      <button type="button">
        <Play />
      </button>
    </div>

    <div className={styles.Title}>
      <img src={song.track.album.images[0].url} alt="cover img" />
      <div className={styles.NameContainer}>
        <div
          className={styles.Name}
          style={current ? { color: '#1db954' } : { color: 'white' }}
        >
          <span>{song.track.name}</span>
        </div>
        {song.track.explicit && <span className={styles.Explicit}>e</span>}
        <span
          className={[
            styles.Artist,
            song.track.explicit ? styles.Artist_sub : styles.Artist_badg,
          ].join(', ')}
        >
          {song.track.artists[0].name}
        </span>
      </div>
    </div>
    <div>{song.track.album.name}</div>
    <div>{formatDate(song.added_at)}</div>
    <div className={styles.Length}>
      {millisToMinutesAndSeconds(song.track.duration_ms)}
      <button type="button" className={styles.More}>
        ...
      </button>
    </div>
  </div>
);

export default SongItem;
