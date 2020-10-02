import React from "react";
import PropTypes from "prop-types";

const DoubleTitle = ({ mainTitle, secondaryTitle }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">{mainTitle}</h1>
      <h4 className="text-gray-600 text-3xl font-light">{secondaryTitle}</h4>
    </div>
  );
};

DoubleTitle.propTypes = {
  mainTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
};
DoubleTitle.defaultProps = {
  mainTitle: "",
  secondaryTitle: "",
};

export default DoubleTitle;
