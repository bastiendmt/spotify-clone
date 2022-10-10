import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
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
  const cookies = new Cookies();
  //TODO use selectPlaylists(store.getState());
  const playlists = useAppSelector((state) => state.playlists.playlists);
  const dispatch = useAppDispatch();

  const loadPlaylists = useCallback(async () => {
    const playlistsData = await GetFeaturedPlaylists();
    if (playlistsData?.playlists) {
      dispatch(init(playlistsData.playlists));
    } else {
      setError("Could not load data, try to clean cookies and reload the app.");
    }
  }, [dispatch]);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  const cleanCookies = () => cookies.remove("auth");

  return (
    <>
      {error && (
        <div className={styles.Error}>
          <p>{error}</p>
          <button onClick={cleanCookies}>Clean coockies</button>
        </div>
      )}
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
