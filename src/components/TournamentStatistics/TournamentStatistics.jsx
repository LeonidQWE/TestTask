import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import Time from '../../assets/icons/time.svg?react';
import Players from '../../assets/icons/players.svg?react';
import Tourney from '../../assets/icons/tourney.svg?react';

function TournamentStatistics ({
  date,
  countPlayers,
  countAllPlayers,
  points
}) {
  const schema = [
    {
      Icon: Time,
      value: date,
    },
    {
      Icon: Players,
      value: `${countPlayers}/${countAllPlayers}`,
    },
    {
      Icon: Tourney,
      value: points,
    },
  ]

  return (
    <div>
      {schema.map((item, index) => (
        <StatisticsItem key={index} Icon={item.Icon} value={item.value} />
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

export default TournamentStatistics
