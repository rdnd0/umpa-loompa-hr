import React from "react";

import Header from "../Header";
import DetailWrapper from "../DetailWrapper";
import OompaNameTag from "../OompaNameTag";
import OompaPersonalDetails from "../OompaPersonalDetails";
import useGetSingleOompaResult from "../../hooks/useGetSingleOompaResult";
import ImageWithLoading from "../ImageWithLoading";
import LoaderComponent from "../LoaderComponent";
import OompasDescription from "../OompasDescription";

const DetailView = () => {
  const { data, error } = useGetSingleOompaResult();

  if (error)
    return (
      <div className="flex justify-center pt-20 text-red-400 text-xl">
        Oops something went wrong, please try again later{" "}
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center">
        <LoaderComponent />
      </div>
    );

  return (
    <>
      <Header redirectHome title="Oompa Loompas' Crew" />
      <DetailWrapper
        left={<ImageWithLoading src={data.image} isPictureBig />}
        right={
          <>
            <OompaNameTag firstName={data.first_name} />
            <OompaPersonalDetails
              gender={data.gender}
              profession={data.profession}
            />
            <OompasDescription description={data.description} />
          </>
        }
      />
    </>
  );
};

export default DetailView;
