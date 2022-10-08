import { selectPlaylists } from "../../store/reducers/playlists.reducer";
import { store } from "../../store/store";
import { Playlist } from "../../types/playlist.interface";
import PlaylistItem from "./PlaylistItem/PlaylistItem";
import styles from "./Playlists.module.scss";

const Playlists = () => {
  const playlists = selectPlaylists(store.getState());

  return (
    <div className={styles.Playlists}>
      <h1 className={styles.Title}>Playlists</h1>
      <div className={styles.Container}>
        {playlists?.items.map((item: Playlist) => (
          <PlaylistItem key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
