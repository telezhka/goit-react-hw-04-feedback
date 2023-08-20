import css from '../css/Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.coverR}>
      <h2 className={css.results}>Results: </h2>
      <ul className={css.statList}>
        <li>
          <span className={css.statListText}>Good: {good}</span>
        </li>
        <li>
          <span className={css.statListText}>Neutral: {neutral}</span>
        </li>
        <li>
          <span className={css.statListText}>Bad: {bad}</span>
        </li>
        <li>
          <span className={css.statListText}>Total: {total}</span>
        </li>
        <li>
          <span className={css.statListText}>
            Positive Feedback: {positivePercentage}%
          </span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
