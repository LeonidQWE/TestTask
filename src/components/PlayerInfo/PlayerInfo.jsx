import PropTypes from 'prop-types';

function PlayerInfo(props) {
  const { player } = props;

  return (
    <div className="player-info">
      <p>{player.name}</p>
    </div>
  );
}

PlayerInfo.propTypes = {
  player: PropTypes.object
};

export default PlayerInfo;
