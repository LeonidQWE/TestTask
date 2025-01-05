import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
import UserInfo from '../UserInfo/UserInfo';
import Progress from '../Progress/Progress';
import Tournaments from '../Tournaments/Tournaments';
import { DATA } from '../../constants/data';
import styles from './Main.module.less';

function Main() {
  const {
    userName,
    rating,
    balance,
    avatar,
    progress,
    tournaments,
  } = DATA;

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
      <Tournaments tournaments={tournaments}/>
    </div>
  );
}

export default Main;
