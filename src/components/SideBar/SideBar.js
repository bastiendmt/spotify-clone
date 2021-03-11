import React from 'react'
import styles from './SideBar.module.css'

import Logo from '../../Assets/Logo'
import ListItem from './ListItem/ListItem'

const SideBar = (props) => {
    return <div className={styles.SideBar}>
        <div className={styles.Logo}><Logo/></div>

        <h1 className={styles.Title}>Playlists</h1>

        <hr className={styles.Separator}></hr>


        <div className={styles.ListContainer}>
            
        <ul className={styles.List}>
            {props.playlists?.map(item => {
                return <ListItem playlist={item} key={item.id}/>
            })}
        </ul>
        </div> 
    </div>
}

export default SideBar