import PropTypes from "prop-types";

const Special = ({ title, className, message, greetings }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {message} {greetings}
    </div>
  );
};

Special.propTypes = {
  message: PropTypes.string.isRequired,
  greetings: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Special;
