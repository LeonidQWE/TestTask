import PropTypes from 'prop-types';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import styles from './Players.module.less'

function Players (props) {
  const { players } = props;

  return (
    <div className={styles.players}>
      {players.map((player) => (
        <PlayerInfo key={player.id} player={player} />
      ))}
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.array
};

export default Players;
