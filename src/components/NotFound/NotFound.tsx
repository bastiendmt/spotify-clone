import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.NotFound}>
    <p>An error has occurred, please try again later or</p>
    <Link to="/">
      <span>go to homepage</span>
    </Link>
  </div>
);

export default NotFound;
