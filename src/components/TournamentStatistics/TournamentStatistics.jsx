import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import Time from '../../assets/icons/time.svg?react';
import Players from '../../assets/icons/players.svg?react';
import Tourney from '../../assets/icons/tourney.svg?react';
import styles from './TournamentStatistics.module.less';

function TournamentStatistics ({
  date,
  countPlayers,
  countAllPlayers,
  points
}) {
  const schema = [
    {
      Icon: <Time className={styles.icon}/>,
      value: `${date}`,
    },
    {
      Icon: <Players className={styles.icon}/>,
      value: `${countPlayers}/${countAllPlayers}`,
    },
    {
      Icon: <Tourney className={styles.icon}/>,
      value: `${points}`,
    },
  ]

  return (
    <div className={styles.statistics}>
      {schema.map((item, index) => (
        <StatisticsItem
          key={index}
          Icon={item.Icon}
          value={item.value}
        />
      ))}
    </div>
  )
}

TournamentStatistics.propTypes = {
  date: PropTypes.string,
  countPlayers: PropTypes.number,
  countAllPlayers: PropTypes.number,
  points: PropTypes.number,
}

export default TournamentStatistics;
