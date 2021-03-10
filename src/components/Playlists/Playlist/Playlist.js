import styles from './Playlist.module.css'

const Playlist = (props) => {
    return <div className={styles.Playlist}>
        <div className={styles.imgContainer}>
            <img src="https://www.livingoutlau.com/wp-content/uploads/2020/05/Featued-Tokyo-At-Night-min.jpg" alt="Tokyo" className={styles.Img} />
        </div>
        <div className={styles.Name}>Name</div>
        <div className={styles.Artist}>Artist</div>
    </div>
}

export default Playlist