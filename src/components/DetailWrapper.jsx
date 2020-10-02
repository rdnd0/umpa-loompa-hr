import React from "react";

const DetailWrapper = ({ left, right }) => {
  return (
    <div className="flex py-16 px-40">
      <div className="w-3/5">{left}</div>
      <div className="w-2/5">{right}</div>
    </div>
  );
};

export default DetailWrapper;
