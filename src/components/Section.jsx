import css from '../css/Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <div className={css.coverB}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
