import React from "react";
import useSWR from "swr";
import OompaCard from "./OompaCard";

const url =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1";

const OompasGrid = () => {
  const { data, error } = useSWR(url);

  if (error) return <div>Oops something went wrong</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-20 p-40">
      {data.results.map((oompa) => (
        <OompaCard key={oompa.id} oompa={oompa} />
      ))}
    </div>
  );
};

export default OompasGrid;
