import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
import UserInfo from '../UserInfo/UserInfo';
import { DATA } from '../../constants/data';
import styles from './Main.module.less';
import Progress from '../Progress/Progress';

function Main() {
  console.log(DATA);
  const {
    userName,
    rating,
    balance,
    avatar,
    progress,
    players,
  } = DATA;

  console.log(players[0]);

  return (
    <div className={styles.main}>
      <Logo />
      <Spiner/>
      <UserInfo
        userName={userName}
        rating={rating}
        avatar={avatar}
        balance={balance}/>
      <Progress progress={progress}/>
    </div>
  );
}

export default Main;
