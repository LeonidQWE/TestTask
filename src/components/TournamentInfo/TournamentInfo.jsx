import PropTypes from 'prop-types';
import TournamentStatistics from '../TournamentStatistics/TournamentStatistics';
import styles from './TournamentInfo.module.less';
import TournamentTitle from '../TournamentTitle/TournamentTitle';

function TournamentInfo ({ info, selected }) {
  const {
    date,
    countPlayers,
    countAllPlayers,
    points,
    NL,
    name,
    ...otherInfo
  } = info;

  return (
    <div className={styles.info}>
      <div>
        <TournamentTitle
          NL={NL}
          name={name}
          selected={selected}
          otherInfo={otherInfo}/>
      </div>
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
  selected: PropTypes.bool,
}

export default TournamentInfo
