import React from "react";
import Header from "../Header";

import { useParams } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  return (
    <>
      <Header redirectHome />
      <div>DetailView</div>
      <div>{id}</div>
    </>
  );
};

export default DetailView;
