import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PlaylistDetail.module.css";
import { SongList } from "./SongList/SongList";

const PlaylistDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    //load details
  }, [id]);

  return (
    <div className={styles.PlaylistDetail}>
      <div className={styles.Cover}>
        <div className={styles.Cover_Background}></div>
        <div className={styles.Cover_Gradient}></div>
        <div className={styles.Cover_Img}>
          <img
            src="https://i.scdn.co/image/ab67706f0000000376a3e06aaf57c33ac79b94c0"
            alt="playlist img"
          />
        </div>
        <div className={styles.Cover_Infos}>
          <div className={styles.Cover_Infos_Playlist}>PLAYLIST</div>
          <div className={styles.Cover_Infos_Title}>Groove Theory</div>
          <div className={styles.Cover_Infos_Categ}>Rap FR</div>
          <div className={styles.Cover_Infos_Details}>
            <span className={styles.Cover_Text_Bold}>Owner</span>
            <span className={styles.Cover_Text_Light}>69 songs, about 4 hr 20 min</span>
          </div>
        </div>
      </div>

      <div className={styles.List}>
        <div className={styles.Heading}>
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date added</div>
          <div>Length</div>
        </div>
        
        <SongList />
        <SongList />


        {/* <SongList />
        <SongList />
        <SongList />
        <SongList />
        <SongList /> */}
      </div>
    </div>
  );
};

export default PlaylistDetail;
