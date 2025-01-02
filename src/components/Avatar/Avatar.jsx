import PropTypes from 'prop-types';
import styles from './Avatar.module.less';

function Avatar ({ avatarSrc }) {
  return (
    <div className={styles.avatarContainer}>
      <img src={avatarSrc} alt="avatar" />
    </div>
  );
}

Avatar.propTypes = {
  avatarSrc: PropTypes.string,
};

export default Avatar;
