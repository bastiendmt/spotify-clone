import React from 'react'
import styles from './App.module.css'

import SideBar from './components/SideBar/SideBar'
import Playlists from './components/Playlists/Playlists'

const App = () => {
    return <div className={styles.App}>
        <SideBar/>
        <Playlists />
    </div>
}

export default App