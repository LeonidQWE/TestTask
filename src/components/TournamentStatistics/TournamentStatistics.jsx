import PropTypes from 'prop-types';
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
      icon: Time,
      value: date,
    },
    {
      icon: Players,
      value: `${countPlayers}/${countAllPlayers}`,
    },
    {
      icon: Tourney,
      value: points,
    },
  ]

  return (
    <div>
      
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
