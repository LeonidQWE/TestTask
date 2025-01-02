import { PropTypes } from 'prop-types';
import UserName from '../UserName/UserName';
import Rating from '../Rating/Rating';
import Avatar from '../Avatar/Avatar';
import BalanceSwitcher from '../BalanceSwitcher/BalanceSwitcher';
import styles from './UserInfo.module.less';

function UserInfo ({
  userName,
  rating,
  avatar,
  balance,
}) {

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoText}>
        <UserName userName={userName} />
        <Rating rating={rating} />
      </div>
      <Avatar avatarSrc={avatar}/>
      <BalanceSwitcher balance={balance}/>
    </div>
  )
}

UserInfo.propTypes = {
  userName: PropTypes.string,
  rating: PropTypes.number,
  avatar: PropTypes.string,
  balance: PropTypes.string,
}

export default UserInfo
