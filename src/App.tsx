import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import styles from './App.module.scss';
import Loader from './components/Loader/Loader';
import Player from './components/Player/Player';
import SideBar from './components/SideBar/SideBar';
import PlaylistDetail from './pages/PlaylistDetail/PlaylistDetail';
import Playlists from './pages/Playlists/Playlists';
import { useAppStore, useUserPlaylists } from './store/zustand-store';

const App = () => {
  const cookies = new Cookies();
  const fetchUserPlaylists = useAppStore((state) => state.fetchUserPlaylists);
  const user = 'smedjan';
  const { playlists, loading, error } = useUserPlaylists();

  useEffect(() => {
    fetchUserPlaylists(user);
  }, [fetchUserPlaylists]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {error !== '' && (
            <div className={styles.Error}>
              <p>{error}</p>
              <button type="button" onClick={() => cookies.remove('auth')}>
                Clean cookies
              </button>
            </div>
          )}
          {error === '' && playlists != null && (
            <div className={styles.App}>
              <BrowserRouter>
                <SideBar playlists={playlists} />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Playlists
                        playlists={playlists}
                        message={`${user}'s playlists`}
                      />
                    }
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
