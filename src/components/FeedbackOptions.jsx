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
        <button type="button" onClick={setNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={setBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};
FeedbackOptions.propTypes = {
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
  setBad: PropTypes.func.isRequired,
};
