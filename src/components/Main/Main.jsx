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
    sum,
    avatar
  } = DATA;

  console.log(userName, rating, sum, avatar);

  return (
    <div className={styles.main}>
      <Logo />
      <Spiner/>

      {/* <Players players={DATA}/> */}
    </div>
  );
}

export default Main;
