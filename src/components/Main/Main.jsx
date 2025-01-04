import Logo from '../Logo/Logo';
import Spiner from '../Spinner/Spiner';
import UserInfo from '../UserInfo/UserInfo';
import { DATA } from '../../constants/data';
import styles from './Main.module.less';
import Progress from '../Progress/Progress';
import Tournament from '../Tournament/Tournament';

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
      {tournaments.map((player, index) => <Tournament key={index} player={player} />)}
    </div>
  );
}

export default Main;
