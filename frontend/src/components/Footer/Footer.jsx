import PropTypes from "prop-types";

const Footer = ({ placeNumber }) => {
  return <div>Footer {placeNumber}</div>;
};

Footer.propTypes = {
  placeNumber: PropTypes.number.isRequired,
};
export default Footer;
