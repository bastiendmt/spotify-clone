import styles from './ListItem.module.css'

const ListItem = (props) => {
    return <li className={styles.Item}><span className={styles.Title}>{props.playlist.name}</span></li>
}

export default ListItem