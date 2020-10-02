import React from "react";
import PropTypes from "prop-types";
import genderConversionObject from "../utils/genderConversionObject";

const OompaPersonalDetails = ({ gender, profession }) => {
  return (
    <div className="flex flex-col text-gray-500 italic text-sm">
      <span>{genderConversionObject[gender]}</span>
      <span>{profession}</span>
    </div>
  );
};

OompaPersonalDetails.propTypes = {
  gender: PropTypes.string,
  profession: PropTypes.string,
};
OompaPersonalDetails.defaultProps = {
  gender: "F",
  profession: "Unkown",
};

export default OompaPersonalDetails;
