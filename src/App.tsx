import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetFeaturedPlaylists } from "./API";
import styles from "./App.module.scss";
import Player from "./components/Player/Player";
import SideBar from "./components/SideBar/SideBar";
import PlaylistDetail from "./pages/PlaylistDetail/PlaylistDetail";
import Playlists from "./pages/Playlists/Playlists";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { init } from "./store/reducers/playlists.reducer";

const App = () => {
  const [error, setError] = useState<null | string>();
  //TODO use selectPlaylists(store.getState());
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const dispatch = useAppDispatch();

  const loadPlaylists = useCallback(async () => {
    const playlistsData = await GetFeaturedPlaylists();
    if (playlistsData.playlists) {
      dispatch(init(playlistsData.playlists));
    } else {
      setError("Could not load data");
    }
  }, [dispatch]);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  return (
    <>
      {error && <div className={styles.Error}>{error}</div>}
      {!error && (
        <div className={styles.App}>
          <BrowserRouter>
            {playlists && <SideBar playlists={playlists} />}
            <Routes>
              <Route path="/" element={<Playlists playlists={playlists} />} />
              <Route path="/playlist/:id" element={<PlaylistDetail />} />
            </Routes>
            <Player />
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
