import { PropTypes } from 'prop-types';
import styles from './Progress.module.less';

function Progress ({ progress }) {
  return (
    <div className={styles.progress}>
      <div className={styles.progressContainer}>
        <div className={styles.progressLine} style={{ width: `${progress}%` }}></div>
      </div>
      <span className={styles.progressText}>{`Loading ${progress}%`}</span>
    </div>
  )
}

Progress.propTypes = {
  progress: PropTypes.number,
}

export default Progress
