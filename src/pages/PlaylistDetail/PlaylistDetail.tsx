import { FastAverageColor } from 'fast-average-color';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Time } from '../../assets';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadSong } from '../../store/reducers/currentSong.slice';
import { Track } from '../../types/track.interface';
import millisToMinutesAndSeconds from '../../utils/msToMinutes';
import { fetchPlaylistById } from '../../store/reducers/playlistDetail.slice';
import styles from './PlaylistDetail.module.scss';
import SongItem from './SongItem/SongItem';
import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';

const PlaylistDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const coverRef = useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();
  const { song } = useAppSelector((state) => state.currentSong);
  const { loading, playlist, error } = useAppSelector(
    (state) => state.playlistDetail,
  );

  useEffect(() => {
    if (id != null) {
      void dispatch(fetchPlaylistById(id));
    }
  }, [id]);

  useEffect(() => {
    if (coverRef.current != null) {
      coverRef.current.crossOrigin = 'Anonymous';
      new FastAverageColor()
        .getColorAsync(coverRef.current)
        .then((color) => {
          const background = document.getElementById('Background');
          const playlistBackground =
            document.getElementById('PlaylistBackgorund');
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
  }, [playlist]);

  const songClicked = (clickedSong: Track): void => {
    if (clickedSong.track.preview_url !== '') {
      dispatch(loadSong(clickedSong));
    }
  };

  const getPlaylistDuration = (): string => {
    let totalMS = 0;
    if (playlist != null) {
      const { items } = playlist.tracks;
      items.forEach(({ track }) => (totalMS += track.duration_ms));
      return `about ${millisToMinutesAndSeconds(totalMS)}`;
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
                <div className={styles.Background} id="Background" />
                <div className={styles.Gradient} />
                <div className={styles.Img}>
                  <img
                    src={playlist.images[0].url}
                    alt="playlist img"
                    ref={coverRef}
                  />
                </div>
                <div className={styles.Infos}>
                  <div className={styles.Playlist}>PLAYLIST</div>
                  <div className={styles.Title}>
                    <h1>{playlist.name}</h1>
                  </div>
                  <div className={styles.Categ}>{playlist.description}</div>
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

              <div className={styles.List_Background} id="PlaylistBackgorund" />
              <div className={styles.List}>
                <div className={styles.Heading_Sticky}>
                  <div className={styles.Heading}>
                    <div>#</div>
                    <div>Title</div>
                    <div>Album</div>
                    <div>Date added</div>
                    <div className={styles.Length}>
                      <Time />
                    </div>
                  </div>
                </div>

                {playlist.tracks.items.map((item: Track, index: number) => (
                  <SongItem
                    key={item.track.id}
                    song={item}
                    index={index}
                    current={item.track.id === song?.track.id}
                    songClicked={() => songClicked(item)}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PlaylistDetail;
