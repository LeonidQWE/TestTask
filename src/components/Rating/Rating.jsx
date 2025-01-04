import { PropTypes } from 'prop-types';
import { giveRating } from '../../helpers/giveRating';
import styles from './Rating.module.less';
import Star from '../../assets/icons/star.svg?react';
import StarEmpty from '../../assets/icons/star-empty.svg?react';

function Rating ({ rating }) {
  return (
    <div className={styles.rating}>
      {giveRating(rating).map((star, index) => (
        star ? <Star key={index} /> : <StarEmpty key={index} />
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number,
}

export default Rating;
