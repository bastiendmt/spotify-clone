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
  const [error, setError] = useState<null | string>();
  const cookies = new Cookies();
  // TODO use selectPlaylists(store.getState());
  const playlists: PlaylistsType = useAppSelector(
    (state) => state.playlists.playlists,
  );
  const dispatch = useAppDispatch();

  // const loadPlaylists = useCallback(async () => {
  //   const playlistsData = await GetFeaturedPlaylists();
  //   if (playlistsData?.playlists.items.length > 0) {
  //     dispatch(init(playlistsData.playlists));
  //   } else {
  //     setError('Could not load data, try to clean cookies and reload the app.');
  //   }
  // }, [dispatch]);

  useEffect(() => {
    const load = async (): Promise<FeaturedPlaylistsResponse> =>
      GetFeaturedPlaylists();

    load()
      .then((playlistsData) => {
        dispatch(init(playlistsData.playlists));
      })
      .catch(() => {
        setError(
          'Could not load data, try to clean cookies and reload the app.',
        );
      });
  }, []);

  const cleanCookies = (): void => cookies.remove('auth');

  return (
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
            {playlists.items.length > 0 && <SideBar playlists={playlists} />}
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
