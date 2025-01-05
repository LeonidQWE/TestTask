import PropTypes from 'prop-types';
import styles from './Tournament.module.less';
import TournamentStatus from '../TournamentStatus/TournamentStatus';
import TournamentInfo from '../TournamentInfo/TournamentInfo';

function Tournament ({ player }) {
  const { status, ...info } = player;

  return (
    <div className={styles.tournament}>
      <TournamentStatus status={status} />
      <TournamentInfo info={info}/>
    </div>
  )
}

Tournament.propTypes = {
  player: PropTypes.object,
}

export default Tournament;
