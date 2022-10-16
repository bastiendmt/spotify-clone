import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { GetFeaturedPlaylists } from './API';
import styles from './App.module.scss';
import Player from './components/Player/Player';
import SideBar from './components/SideBar/SideBar';
import PlaylistDetail from './pages/PlaylistDetail/PlaylistDetail';
import Playlists from './pages/Playlists/Playlists';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { init } from './store/reducers/playlists.reducer';
import {
  FeaturedPlaylistsResponse,
  PlaylistsType,
} from './types/playlists.interface';

const App = (): JSX.Element => {
  const cookies = new Cookies();
  const [error, setError] = useState<null | string>();
  const [loading, setloading] = useState(true);

  const playlists: PlaylistsType = useAppSelector(
    (state) => state.playlists.playlists,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const load = async (): Promise<FeaturedPlaylistsResponse> =>
      GetFeaturedPlaylists();

    load()
      .then((playlistsData) => {
        dispatch(init(playlistsData.playlists));
        setloading(false);
      })
      .catch(() => {
        setError(
          'Could not load data, try to clean cookies and reload the app.',
        );
        setloading(false);
        console.log('error');
      });

    console.log(playlists);
  }, []);

  const cleanCookies = (): void => cookies.remove('auth');

  return (
    <>
      {loading && <div>loading...</div>}
      {!loading && (
        <>
          {error != null && (
            <div className={styles.Error}>
              <p>{error}</p>
              <button type="button" onClick={cleanCookies}>
                Clean coockies
              </button>
            </div>
          )}
          {error == null && (
            <div className={styles.App}>
              <BrowserRouter>
                {playlists.items.length > 0 && (
                  <SideBar playlists={playlists} />
                )}
                <Routes>
                  <Route
                    path="/"
                    element={<Playlists playlists={playlists} />}
                  />
                  <Route path="/playlist/:id" element={<PlaylistDetail />} />
                </Routes>
                <Player />
              </BrowserRouter>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;
