import styles from './Playlist.module.css'

const Playlist = (props) => {
    return <div className={styles.Playlist}>
        <div className={styles.imgContainer}>
            <img src={props.playlist.images[0].url} alt="Tokyo" className={styles.Img} />
        </div>
        <div className={styles.Name}>{props.playlist.name}</div>
        <div className={styles.Artist}>{props.playlist.owner?.display_name}</div>
    </div>
}

export default Playlist