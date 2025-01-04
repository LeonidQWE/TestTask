import PropTypes from 'prop-types';
import styles from './Button.module.less';

function Button ({status}) {
  const statusText = status === 'cancelled' ? 'Cancelled' : 'Join table';
  const btnStyle = status === 'cancelled' ? 'disabled' : 'active';
  const disabled = status === 'cancelled';

  return (
    <button
      className={`${styles.btn} ${styles[btnStyle]}`}
      disabled={disabled}
    >
      {statusText}
    </button>
  )
}

Button.propTypes = {
  status: PropTypes.string,
};

export default Button;
