import React from "react";
import PropTypes from "prop-types";

const Icon = ({ classes, imgSrc, altText, width }) => {
  return <img className={classes} src={imgSrc} alt={altText} width={width} />;
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
  width: "",
};

export default Icon;
