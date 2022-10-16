import { FastAverageColor } from 'fast-average-color';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetPlaylistDetail } from '../../API';
import { Time } from '../../assets';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadSong } from '../../store/reducers/playing.reducer';
import { PlaylistType } from '../../types/playlist.interface';
import { Track } from '../../types/track.interface';
import styles from './PlaylistDetail.module.scss';
import SongItem from './SongItem/SongItem';

const PlaylistDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<PlaylistType | null>();
  const coverRef = useRef<HTMLImageElement | null>(null);
  const currentSong = useAppSelector((state) => state.playing.song);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadPlaylistDetails = async (): Promise<PlaylistType | undefined> => {
      if (id != null) {
        return GetPlaylistDetail(id);
      }
      return undefined;
    };
    loadPlaylistDetails()
      .then((playlistData) => setPlaylist(playlistData))
      .catch(() => {
        console.log('error');
      });
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

  const songClicked = (song: Track): void => {
    if (song.track.preview_url !== '') {
      dispatch(loadSong(song));
    }
  };

  return (
    <>
      {playlist == null && <div />}
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
                  {playlist.tracks.items.length} songs, about 4 hr 20 min
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
                current={item.track.id === currentSong?.track.id}
                songClicked={() => songClicked(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistDetail;
