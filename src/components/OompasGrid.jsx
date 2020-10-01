import React from "react";
import { useSWRInfinite } from "swr";
import { Waypoint } from "react-waypoint";

import { getKey } from "../utils/SWRConfig";
import OompaCard from "./OompaCard";

const OompasGrid = () => {
  const { data, size, setSize } = useSWRInfinite(getKey);
  const handleNextPage = (totalScreens) => {
    if (totalScreens !== size) setSize(size + 1);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-20 p-40">
      {data.map((oompas) =>
        oompas.results?.map((oompa) => (
          <OompaCard key={oompa.id} oompa={oompa} />
        ))
      )}
      <Waypoint onEnter={handleNextPage} />
    </div>
  );
};

export default OompasGrid;
