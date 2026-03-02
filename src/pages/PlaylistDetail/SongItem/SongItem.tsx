import Play from '../../../assets/play.svg?react';
import { useAppStore } from '../../../store/zustand-store';
import type { Track } from '../../../types/track.interface';
import formatDate from '../../../utils/formatDate';
import msToMinutesAndSeconds from '../../../utils/msToMinutes';
import styles from './SongItem.module.scss';

interface SongItemPros {
  current: boolean;
  index: number;
  song: Track;
}

const SongItem = ({ song, index, current }: SongItemPros) => {
  const loadSong = useAppStore((state) => state.loadSong);
  const previewAvailable = song.track?.preview_url !== null;

  const handleSongClick = (): void => {
    if (previewAvailable) {
      loadSong(song);
    }
  };

  return (
    song.track && (
      <div
        className={[
          styles.Item,
          previewAvailable ? styles.Enabled : styles.Disabled,
        ].join(' ')}
        // biome-ignore lint/a11y/useSemanticElements: clickable div is fine
        role="button"
        tabIndex={0}
        onClick={handleSongClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSongClick();
          }
        }}
      >
        <div className={styles.Index}>
          <span className={current ? 'playing' : ''}>{index + 1}</span>
          <Play className={styles.IndexPlay} />
        </div>

        <div className={styles.Title}>
          {song.track.album.images?.[0]?.url && (
            <img src={song.track.album.images[0].url} alt="cover img" />
          )}
          <div className={styles.NameContainer}>
            <div className={styles.Name}>
              <span className={current ? 'playing' : ''}>
                {song.track.name}
              </span>
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
          {/* should be in another column */}
          {/* <button type="button" className={styles.More} tabIndex={-1}>
                ...
              </button> */}
        </div>
      </div>
    )
  );
};

export default SongItem;
