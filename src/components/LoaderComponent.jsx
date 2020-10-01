import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComponent = ({ type, color, height, width, timeout }) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    />
  );
};

LoaderComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  timeout: PropTypes.number,
};

LoaderComponent.defaultProps = {
  type: "ThreeDots",
  color: "#A0AEC1",
  height: 100,
  width: 100,
  timeout: 3000,
};

export default LoaderComponent;
