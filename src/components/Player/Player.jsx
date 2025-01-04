import PropTypes from 'prop-types';
import styles from './Player.module.less';
import PlayerStatus from '../PlayerStatus/PlayerStatus';

function Player ({ player }) {
  const { status, ...info } = player;

  return (
    <div className={styles.player}>
      <PlayerStatus status={'registering'} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus dicta, libero quasi doloribus vel sit facere architecto iste eum sunt repellat. Exercitationem, saepe earum?</p>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object,
}

export default Player
