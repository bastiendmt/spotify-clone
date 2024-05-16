import styles from './Loader.module.scss';

const Loader = () => (
  <div
    className={styles.Loader}
    aria-busy="true"
    role="progressbar"
    aria-valuenow={0}
    aria-valuemin={0}
    aria-valuemax={100}
  />
);

export default Loader;
