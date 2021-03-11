import React, { useState, useEffect } from 'react'
import styles from './App.module.css'

import SideBar from './components/SideBar/SideBar'
import Playlists from './components/Playlists/Playlists'

import { GetPlaylists } from './API'

const App = () => {

    const [playlists, setPlaylists] = useState()

    const loadPlaylists = async () => {
        await GetPlaylists().then(data => {
            console.log(data);
            setPlaylists(data.playlists.items)
        })

    }

    useEffect(() => {

        loadPlaylists();

    }, [])

    return <div className={styles.App}>
        {playlists &&  <SideBar playlists={playlists} />}
        {playlists &&  <Playlists playlists={playlists} />}
       
    </div>
}

export default App