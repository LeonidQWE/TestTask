import PropTypes from 'prop-types';
import styles from './TournamentStatus.module.less';

function TournamentStatus ({ status }) {
  const isRegistering = status === 'registering';

  return (
    <div className={`${styles.status} ${isRegistering ? styles.registering : styles.canceled}`}>
      <span className={styles.text}>{status}</span>
    </div>
  )
}

TournamentStatus.propTypes = {
  status: PropTypes.string,
}

export default TournamentStatus
