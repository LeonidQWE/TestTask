import PropTypes from 'prop-types';
import Tournament from '../Tournament/Tournament';
import styles from './Tournaments.module.less';

function Tournaments ({ tournaments }) {
  return (
    <div className={styles.tournaments}>
      {tournaments.map((tournament) => <Tournament key={tournament.id} tournament={tournament} />)}
    </div>
  )
}

Tournaments.propTypes = {
  tournaments: PropTypes.array,
}

export default Tournaments;
