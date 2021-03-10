import React from 'react'
import Playlist from './Playlist/Playlist'
import styles from './Playlists.module.css'

const Playlists = () => {
    return <div className={styles.Playlists}>
        <h1 className={styles.Title}>Playlists</h1>

        <div className={styles.Container}>
            <Playlist />
        </div>
        
    </div>
}


export default Playlists