import PropTypes from 'prop-types';
import styles from './Player.module.less';
import PlayerStatus from '../PlayerStatus/PlayerStatus';
import TournamentStatistics from '../TournamentStatistics/TournamentStatistics';

function Player ({ player }) {
  const { status, date, countPlayers, countAllPlayers, points } = player;

  return (
    <div className={styles.player}>
      <PlayerStatus status={status} />
      <TournamentStatistics
        date={date}
        countPlayers={countPlayers}
        countAllPlayers={countAllPlayers}
        points={points}
      />
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
}

export default Player
