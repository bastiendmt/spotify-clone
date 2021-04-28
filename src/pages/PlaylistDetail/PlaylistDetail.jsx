import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PlaylistDetail.module.css";
import { SongItem } from "./SongItem/SongItem";
import { GetPlaylistDetail } from "../../API";
import { connect } from "react-redux";

const PlaylistDetail = ({ loadSong }) => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    console.log(id);
    loadPlaylistDetails(id);
  }, [id]);

  const loadPlaylistDetails = async (playlistId) => {
    await GetPlaylistDetail(playlistId).then((data) => {
      console.log(data);
      setPlaylist(data);
    });
  };

  const songClicked = (song) => {
    console.log(song);
    console.log("load song :" + song.track.preview_url);
    loadSong(song);
  };

  return (
    <>
      {playlist && (
        <div className={styles.PlaylistDetail}>
          <div className={styles.Cover}>
            <div className={styles.Cover_Background}></div>
            <div className={styles.Cover_Gradient}></div>
            <div className={styles.Cover_Img}>
              <img src={playlist.images[0].url} alt="playlist img" />
            </div>
            <div className={styles.Cover_Infos}>
              <div className={styles.Cover_Infos_Playlist}>PLAYLIST</div>
              <div className={styles.Cover_Infos_Title}>
                <h1>{playlist.name}</h1>
              </div>
              <div className={styles.Cover_Infos_Categ}>
                {playlist.description}
              </div>
              <div className={styles.Cover_Infos_Details}>
                <span className={styles.Cover_Text_Bold}>
                  {playlist.owner.display_name}
                </span>
                <span className={styles.Cover_Text_Light}>
                  69 songs, about 4 hr 20 min
                </span>
              </div>
            </div>
          </div>

          <div className={styles.List_Background}></div>
          <div className={styles.List_Content}>
            <div className={styles.Heading_Sticky}>
              <div className={styles.Heading}>
                <div>#</div>
                <div>Title</div>
                <div>Album</div>
                <div>Date added</div>
                <div className={styles.Heading_Length}>Length</div>
              </div>
            </div>

            {playlist.tracks.items.map((item, index) => (
              <SongItem
                key={item.track.id}
                song={item}
                index={index}
                songClicked={() => songClicked(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSong: (song) => dispatch({ type: "load", song }),
  };
};

export default connect(null, mapDispatchToProps)(PlaylistDetail);
