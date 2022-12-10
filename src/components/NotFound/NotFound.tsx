import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = (): JSX.Element => (
  <div className={styles.NotFound}>
    <p>An error has occurred</p>
    <Link to="/">
      <span>Go back</span>
    </Link>
  </div>
);

export default NotFound;
