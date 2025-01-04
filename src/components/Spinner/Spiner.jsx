import styles from './Spiner.module.less';

function Spiner() {
  const countSpinerItems = 12;

  return (
    <div className={styles.spiner}>
      {Array(countSpinerItems).fill(0).map((item, index) => <div key={index} className={styles.spinerItem}></div>)}
    </div>
  );
}

export default Spiner;
