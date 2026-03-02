import { FastAverageColor } from 'fast-average-color';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Time from '../../assets/time.svg?react';
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import {
  useAppStore,
  useCurrentSong,
  usePlaylistDetail,
} from '../../store/zustand-store';
import msToMinutesAndSeconds from '../../utils/msToMinutes';
import styles from './PlaylistDetail.module.scss';
import SongItem from './SongItem/SongItem';

const PlaylistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const coverRef = useRef<HTMLImageElement | null>(null);
  const fetchPlaylistById = useAppStore((state) => state.fetchPlaylistById);
  const { playlist, loading, error } = usePlaylistDetail();
  const { song } = useCurrentSong();

  useEffect(() => {
    if (id != null) {
      void fetchPlaylistById(id);
    }
  }, [id, fetchPlaylistById]);

  useEffect(() => {
    if (coverRef.current != null) {
      coverRef.current.crossOrigin = 'Anonymous';
      new FastAverageColor()
        .getColorAsync(coverRef.current)
        .then((color) => {
          const background = document.getElementById('Background');
          const playlistBackground =
            document.getElementById('PlaylistBackground');
          if (background != null) {
            background.style.backgroundColor = color.rgb;
          }
          if (playlistBackground != null) {
            playlistBackground.style.backgroundColor = color.rgb;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const getPlaylistDuration = (): string => {
    let totalMS = 0;
    if (playlist != null) {
      const { items } = playlist.tracks;
      for (const item of items) {
        totalMS += item.track?.duration_ms ?? 0;
      }
      return `about ${msToMinutesAndSeconds(totalMS)}`;
    }
    return 'could not load duration';
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {error !== '' && <NotFound />}
          {playlist != null && (
            <div className={styles.PlaylistDetail}>
              <div className={styles.Cover}>
                <div
                  className={styles.Background}
                  id="Background"
                  data-testid="Background"
                />
                <div className={styles.Gradient} />
                <img
                  src={playlist.images[0].url}
                  alt="playlist img"
                  ref={coverRef}
                  className={styles.Img}
                />
                <div className={styles.Infos}>
                  <div className={styles.Playlist}>Playlist</div>
                  <h1 className={styles.Title}>{playlist.name}</h1>
                  <div className={styles.Category}>{playlist.description}</div>
                  <div className={styles.Details}>
                    <span className={styles.Text_Bold}>
                      {playlist.owner.display_name}
                    </span>
                    <span className={styles.Text_Light}>
                      {playlist.tracks.items.length} songs,{' '}
                      {getPlaylistDuration()}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.List_Background} id="PlaylistBackground" />
              <div className={styles.List}>
                <div className={styles.Heading}>
                  <div>#</div>
                  <div>Title</div>
                  <div>Album</div>
                  <div>Date added</div>
                  <div className={styles.Length}>
                    <Time />
                  </div>
                </div>

                {playlist.tracks.items.map(
                  (item, index) =>
                    item.track && (
                      <SongItem
                        key={item.track.id + index.toString()}
                        song={item}
                        index={index}
                        current={item.track.id === song?.track?.id}
                      />
                    ),
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PlaylistDetail;
