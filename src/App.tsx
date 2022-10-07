import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GetPlaylists } from "./API";
import styles from "./App.module.scss";
import Player from "./components/Player/Player";
import SideBar from "./components/SideBar/SideBar";
import PlaylistDetail from "./pages/PlaylistDetail/PlaylistDetail";
import Playlists from "./pages/Playlists/Playlists";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { init } from "./store/reducers/playlists";

const App = () => {
  const [error, setError] = useState<null | string>();
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const dispatch = useAppDispatch();

  const loadPlaylists = useCallback(async () => {
    await GetPlaylists().then((data) => {
      if (data?.playlists) {
        dispatch(init(data.playlists.items));
      } else {
        setError("Could not load data");
      }
    });
  }, [dispatch]);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  if (error) {
    return <div className={styles.Error}>{error}</div>;
  } else {
    return (
      <div className={styles.App}>
        <Router>
          {playlists && <SideBar />}

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
