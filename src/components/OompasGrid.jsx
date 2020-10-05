import React from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

import OompaCard from "./OompaCard";
import LoaderComponent from "./LoaderComponent";

const OompasGrid = ({ data, size, setSize, searchValue, isResultEmpty }) => {
  const handleNextPage = () => {
    const totalDataLength = data && data[0].total;
    if (totalDataLength === size || searchValue) return null;
    setSize(size + 1);
  };

  if (isResultEmpty && searchValue)
    return (
      <div className="flex justify-center pt-20 text-red-400 text-xl">
        Please try again, no results were found.
      </div>
    );
  if (!data.length)
    return (
      <div className="flex justify-center">
        <LoaderComponent />
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-8 pt-20 p-40">
      {data.map((oompas) =>
        oompas.results?.map((oompa) => (
          <OompaCard key={oompa.id} oompa={oompa} />
        ))
      )}
      <Waypoint onEnter={handleNextPage} />
      <span data-cy="gridBottom" />
    </div>
  );
};

OompasGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  size: PropTypes.number,
  setSize: PropTypes.func,
  searchValue: PropTypes.string,
  isResultEmpty: PropTypes.bool,
};

OompasGrid.defaultProps = {
  data: [],
  size: 0,
  setSize: () => {},
  searchValue: "",
  isResultEmpty: false,
};

export default OompasGrid;
