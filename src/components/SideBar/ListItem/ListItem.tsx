import styles from "./ListItem.module.css";
import { Link } from "react-router-dom";
import { Playlist } from "../../../types/Playlist";

type ListItemProps = {
  playlist: Playlist;
};

const ListItem = ({playlist}: ListItemProps) => {
  return (
    <Link to={`/playlist/${playlist.id}`}>
      <li className={styles.Item}>
        <span className={styles.Title}>{playlist.name}</span>
      </li>
    </Link>
  );
};

export default ListItem;
