import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
import UserInfo from '../UserInfo/UserInfo';
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

  return (
    <div className={styles.main}>
      <Logo />
      <Spiner/>
      {/* <Players players={DATA}/> */}
      <UserInfo
        userName={userName}
        rating={rating}
        avatar={avatar}
        balance={balance}/>
    </div>
  );
}

export default Main;
