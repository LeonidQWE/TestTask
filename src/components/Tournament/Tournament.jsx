import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tournament.module.less';
import TournamentStatus from '../TournamentStatus/TournamentStatus';
import TournamentInfo from '../TournamentInfo/TournamentInfo';

function Tournament ({ tournament }) {
  const { status, ...info } = tournament;
  const [selected, setSelected] = useState(false);

  const handleClickSlectTournament = () => {
    setSelected(!selected);
  }

  return (
    <div
      className={`${styles.tournament} ${selected ? styles.selected : ''}`}
      onClick={handleClickSlectTournament}>
      <TournamentStatus status={status} />
      <TournamentInfo
        selected={selected}
        info={info}/>
    </div>
  )
}

Tournament.propTypes = {
  tournament: PropTypes.object,
}

export default Tournament;
