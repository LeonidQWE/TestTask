import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.less';

function StatisticsItem ({ Icon, value }) {
  return (
    <div className={styles.item}>
      <Icon className={styles.icon}/>
      <span className={styles.value}>{value}</span>
    </div>
  )
}

StatisticsItem.propTypes = {
  Icon: PropTypes.element,
  value: PropTypes.string,
}

export default StatisticsItem;
