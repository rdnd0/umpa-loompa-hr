import React, { useState } from "react";
import PropTypes from "prop-types";
import LoaderComponent from "./LoaderComponent";

const hiddenStyle = { visibility: "hidden" };
const containerStyle = { width: "355.5px", height: "218px" };

const ImageWithLoading = ({ src, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div
      className="relative overflow-hidden mb-6 flex items-center"
      style={containerStyle}
    >
      {!isImageLoaded ? (
        <div className="bg-gray-300 w-full h-full flex items-center justify-center">
          <LoaderComponent type="Oval" timeout={0} height={60} width={60} />
        </div>
      ) : null}
      <img
        style={!isImageLoaded ? hiddenStyle : {}}
        src={src}
        alt={alt}
        className="absolute"
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};

ImageWithLoading.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

ImageWithLoading.defaultProps = {
  src: "",
  alt: "",
};

export default ImageWithLoading;
