import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
// import Players from '../Players/Players';
import { DATA } from '../../constants/data';
import styles from './Main.module.less';
import Button from '../Button/Button';

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
      <Button status={'registering'}/>

      {/* <Players players={DATA}/> */}
    </div>
  );
}

export default Main;
