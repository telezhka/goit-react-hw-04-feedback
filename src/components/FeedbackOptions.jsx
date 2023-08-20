import css from '../css/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ setGood, setBad, setNeutral }) => {
  return (
    <ul className={css.buttonList}>
      <li>
        <button type="button" onClick={setGood}>
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={setNeutral}
          // onClick={() => onLeaveFeedback(option)}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={setBad}
          // onClick={() => onLeaveFeedback(option)}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   // onLeaveFeedback: PropTypes.func.isRequired,
// };
