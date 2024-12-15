import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
// import Players from '../Players/Players';
// import { DATA } from '../../data/data';

import styles from './Main.module.less';

function Main() {
  return (
    <div className={styles.main}>
      <Logo />
      <Spiner/>
      <div>
        <div>
          <span>LongUserName</span>
          <img src="star" alt="star" />
        </div>
      </div>

      {/* <Players players={DATA}/> */}
    </div>
  );
}

export default Main;
