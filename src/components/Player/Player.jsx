import PropTypes from 'prop-types';
import styles from './Player.module.less';

function Player ({ player }) {
  const { status, ...info } = player;

  return (
    <div className={styles.player}>

    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object
}

export default Player
