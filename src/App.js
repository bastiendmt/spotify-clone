import React, { useCallback, useEffect } from "react";
import styles from "./App.module.css";

import SideBar from "./components/SideBar/SideBar";
import Playlists from "./components/Playlists/Playlists";

import { GetPlaylists } from "./API";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PlaylistDetail from "./components/PlaylistDetail/PlaylistDetail";

const App = ({ playlists, initPlaylists }) => {
  const loadPlaylists = useCallback(async () => {
    await GetPlaylists().then((data) => {
      console.log(data);
      initPlaylists(data.playlists.items);
    });
  }, [initPlaylists]);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

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
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initPlaylists: (data) => dispatch({ type: "init", playlists: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
