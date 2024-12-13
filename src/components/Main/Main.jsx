import Spiner from '../Spinner/Spiner';
import Players from '../Players/Players';
import { data } from '../../data/data';

import styles from './Main.module.less';

function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Poker</h1>
      <Spiner/>
      <div>
        <div>
          <span>LongUserName</span>
          <img src="star" alt="star" />
        </div>
      </div>

      <Players players={data}/>
    </div>
  );
}

export default Main;
