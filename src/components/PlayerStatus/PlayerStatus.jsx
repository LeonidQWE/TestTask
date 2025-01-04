import PropTypes from 'prop-types';
import styles from './PlayerStatus.module.less';

function PlayerStatus ({ status }) {
  const isRegistering = status === 'registering';

  return (
    <div className={`${styles.status} ${isRegistering ? styles.registering : styles.canceled}`}>
      <span className={styles.text}>{status}</span>
    </div>
  )
}

PlayerStatus.propTypes = {
  status: PropTypes.string,
}

export default PlayerStatus
