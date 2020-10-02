import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const OompasDescription = ({ description }) => {
  return <div className="text-base py-6">{parse(description)}</div>;
};

OompasDescription.propTypes = {
  description: PropTypes.string,
};

OompasDescription.defaultProps = {
  description: "",
};

export default OompasDescription;
