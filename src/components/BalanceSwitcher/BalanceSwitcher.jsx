import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './BalanceSwitcher.module.less';
import Visible from '../../assets/icons/visible.svg?react';
import Unvisible from '../../assets/icons/unvisible.svg?react';

function BalanceSwitcher ({balance}) {
  const [showBalance, setShowBalance] = useState(false);
  const SwitcherIcon = showBalance ? <Unvisible/> : <Visible/>;
  const switcherText = showBalance ? balance : 'Show balance';

  const handleChangeToggleBalance = () => {
    setShowBalance(!showBalance);
  }

  return (
    <label className={styles.balanceSwitcher}>
      <div className={styles.switcherIconContainer}>
        {SwitcherIcon}
      </div>
      <span className={`${styles.switcherText} ${showBalance ? styles.balance : styles.text}`}>{switcherText}</span>
      <input
        type="checkbox"
        checked={showBalance}
        onChange={handleChangeToggleBalance}
        className={styles.checkbox}
      />
      <span className={styles.switcherMove}></span>
    </label>
  )
}

BalanceSwitcher.propTypes = {
  balance: PropTypes.string
}

export default BalanceSwitcher;
