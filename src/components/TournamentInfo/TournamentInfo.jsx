import PropTypes from 'prop-types';
import TournamentStatistics from '../TournamentStatistics/TournamentStatistics';
import styles from './TournamentInfo.module.less';

function TournamentInfo ({ info }) {
  const {
    date,
    countPlayers,
    countAllPlayers,
    points,
  } = info;

  return (
    <div className={styles.info}>
      <TournamentStatistics
        date={date}
        countPlayers={countPlayers}
        countAllPlayers={countAllPlayers}
        points={points}
      />
    </div>
  )
}

TournamentInfo.propTypes = {
  info: PropTypes.object,
}

export default TournamentInfo