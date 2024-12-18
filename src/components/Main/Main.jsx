import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
// import Players from '../Players/Players';
import { DATA } from '../../constants/data';
import styles from './Main.module.less';

function Main() {
  console.log(DATA);
  const {
    userName,
    rating,
    balance,
    avatar
  } = DATA;

  console.log(userName, rating, balance, avatar);

  return (
    <div className={styles.main}>
      <Logo />
      <Spiner/>
      {/* <Players players={DATA}/> */}
    </div>
  );
}

export default Main;
