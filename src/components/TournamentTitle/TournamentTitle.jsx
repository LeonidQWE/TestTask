import PropTypes from 'prop-types';
import Pin from '../../assets/icons/pin.svg?react';
import styles from './TournamentTitle.module.less';
import Knockout from '../../assets/icons/knockout.svg?react';
import Bounty from '../../assets/icons/bounty.svg?react';
import ProBounty from '../../assets/icons/pro-bounty.svg?react';
import FreeRoll from '../../assets/icons/free-roll.svg?react';
import Rapid from '../../assets/icons/rapid.svg?react';
import Time from '../../assets/icons/time.svg?react';

function TournamentTitle ({ NL, name, selected, otherInfo }) {
  const {
    isKnockout,
    isBounty,
    isProBounty,
    isFreeRoll,
    isRapid,
    isTime
  } = otherInfo

  return (
    <div>
      <div className={styles.subtitle}>
        {selected && <Pin />}
        <div className={styles.subtitleText}>{NL}</div>
        {isKnockout && <Knockout />}
        {isBounty && <Bounty />}
        {isProBounty && <ProBounty />}
        {isFreeRoll && <FreeRoll />}
        {isRapid && <Rapid />}
        {isTime && <Time />}
      </div>
      <h3 className={styles.title}>{name}</h3>
    </div>
  )
}

TournamentTitle.propTypes = {
  NL: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  otherInfo: PropTypes.object,
}

export default TournamentTitle
