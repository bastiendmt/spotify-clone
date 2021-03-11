import React from 'react'
import Playlist from './Playlist/Playlist'
import styles from './Playlists.module.css'

const Playlists = (props) => {
    return <div className={styles.Playlists}>
        <h1 className={styles.Title}>Playlists</h1>

        <div className={styles.Container}>
            {props.playlists?.map(item => {
                return <Playlist key={item.id} playlist={item} />
            })}
            
        </div>
        
    </div>
}


export default Playlists