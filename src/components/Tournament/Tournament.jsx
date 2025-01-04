import PropTypes from 'prop-types';
import styles from './Tournament.module.less';
import TournamentStatus from '../TournamentStatus/TournamentStatus';
import TournamentStatistics from '../TournamentStatistics/TournamentStatistics';

function Tournament ({ player }) {
  const { status, date, countPlayers, countAllPlayers, points } = player;

  return (
    <div className={styles.tournament}>
      <TournamentStatus status={status} />
      <TournamentStatistics
        date={date}
        countPlayers={countPlayers}
        countAllPlayers={countAllPlayers}
        points={points}
      />
    </div>
  )
}

Tournament.propTypes = {
  player: PropTypes.object,
}

export default Tournament;
