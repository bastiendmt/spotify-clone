import FastAverageColor from "fast-average-color";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { GetPlaylistDetail } from "../../API";
import styles from "./PlaylistDetail.module.scss";
import { SongItem } from "./SongItem/SongItem";
import { Time } from "../../assets/Time";
import { Track } from "../../types/Track";
import { Playlist } from "../../types/Playlist";

type PlaylistDetailProps = {
  loadSong: (song: Track) => void;
  currentSong: Track;
};

const PlaylistDetail = ({ loadSong, currentSong }: PlaylistDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<Playlist | null>();
  const coverRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    loadPlaylistDetails(id);
  }, [id]);

  useEffect(() => {
    if (coverRef.current) {
      coverRef.current.crossOrigin = "Anonymous";
      const fac = new FastAverageColor();
      fac
        .getColorAsync(coverRef.current)
        .then((color) => {
          document.getElementById("Background")!.style.backgroundColor =
            color.rgb;
          document.getElementById("PlaylistBackgorund")!.style.backgroundColor =
            color.rgb;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [playlist]);

  const loadPlaylistDetails = async (playlistId: string) => {
    await GetPlaylistDetail(playlistId).then((data) => {
      setPlaylist(data);
    });
  };

  const songClicked = (song: Track) => {
    if (song.track.preview_url) {
      loadSong(song);
    }
  };

  return (
    <>
      {playlist && (
        <div className={styles.PlaylistDetail}>
          <div className={styles.Cover}>
            <div className={styles.Background} id="Background"></div>
            <div className={styles.Gradient}></div>
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
                current={item.track.id === currentSong?.track.id ? true : false}
                songClicked={() => songClicked(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: { playing: { song: Track } }) => {
  return {
    currentSong: state.playing.song,
  };
};

const mapDispatchToProps = (
  dispatch: (loadSong: { type: string; song: Track }) => void
) => {
  return {
    loadSong: (song: Track) => dispatch({ type: "load", song }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);
