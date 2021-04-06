import styles from "./ListItem.module.css";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <Link to={`/playlist/${props.playlist.id}`}>
      <li className={styles.Item}>
        <span className={styles.Title}>{props.playlist.name}</span>
      </li>
    </Link>
  );
};

export default ListItem;
