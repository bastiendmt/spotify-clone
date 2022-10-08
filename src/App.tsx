import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GetFeaturedPlaylists } from "./API";
import styles from "./App.module.scss";
import Player from "./components/Player/Player";
import SideBar from "./components/SideBar/SideBar";
import PlaylistDetail from "./pages/PlaylistDetail/PlaylistDetail";
import Playlists from "./pages/Playlists/Playlists";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { init, selectPlaylists } from "./store/reducers/playlists.reducer";
import { store } from "./store/store";

const App = () => {
  const [error, setError] = useState<null | string>();
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const dispatch = useAppDispatch();

  const loadPlaylists = useCallback(async () => {
    await GetFeaturedPlaylists().then((data) => {
      if (data?.playlists) {
        dispatch(init(data.playlists));
      } else {
        setError("Could not load data");
      }
    });
  }, [dispatch]);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  const playlistsSelected = selectPlaylists(store.getState());
  console.log(playlistsSelected);

  if (error) {
    return <div className={styles.Error}>{error}</div>;
  } else {
    return (
      <div className={styles.App}>
        <Router>
          {playlists && <SideBar playlists={playlists} />}

          <Route path="/" exact>
            {playlists && <Playlists />}
          </Route>

          <Route path="/playlist/:id">
            <PlaylistDetail />
          </Route>

          <Player />
        </Router>
      </div>
    );
  }
};

export default App;
