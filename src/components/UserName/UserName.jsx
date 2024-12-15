import PropTypes from 'prop-types';
import styles from './UserName.module.less';

function UserName ({userName}) {
  return (
    <h2 className={styles.userName}>{userName}</h2>
  )
}

UserName.propTypes = {
  userName: PropTypes.string
};

export default UserName
