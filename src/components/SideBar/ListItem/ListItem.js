import styles from './ListItem.module.css'

const ListItem = (props) => {
    return <li className={styles.Item}><span className={styles.Title}>Titre</span></li>
}

export default ListItem