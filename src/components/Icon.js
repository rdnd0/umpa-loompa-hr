import React from "react";
import PropTypes from "prop-types";

const Icon = ({ classes, imgSrc, altText }) => {
  return <img className={classes} src={imgSrc} alt={altText} />;
};

Icon.propTypes = {
  classes: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
};

Icon.defaultProps = {
  classes: "",
  imgSrc: "",
  altText: "",
};

export default Icon;
