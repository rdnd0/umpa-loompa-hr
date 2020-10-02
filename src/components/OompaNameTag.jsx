import React from "react";
import PropTypes from "prop-types";

const OompaNameTag = ({ firstName }) => {
  return <h2 className="text-2xl font-medium">{firstName}</h2>;
};

OompaNameTag.propTypes = {
  firstName: PropTypes.string,
};
OompaNameTag.defaultProps = {
  firstName: "",
};

export default OompaNameTag;
