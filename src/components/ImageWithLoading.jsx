import React, { useState } from "react";
import PropTypes from "prop-types";

const ImageWithLoading = ({ src, alt }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      {!isImageLoaded ? (
        <svg width="362.66" height="271.98" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>background</title>
            <rect
              fill="#cccccc"
              id="canvas_background"
              height="273.98"
              width="364.66"
              y="-1"
              x="-1"
            />
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
              id="canvasGrid"
            >
              <rect
                fill="url(#gridpattern)"
                strokeWidth="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Layer 1</title>
          </g>
        </svg>
      ) : // <svg width="100" height="100" viewBox="0 0 100 100">
      //   <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
      // </svg>
      null}
      <img
        style={!isImageLoaded ? { visibility: "hidden" } : {}}
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
      />
    </>
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
