import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import genderConversionObject from "../utils/genderConversionObject";

const OompaCard = ({ oompa }) => {
  return (
    <Link to={`/${oompa.id}`}>
      <article>
        <img src={oompa.image} alt="oompa's file" />
        <h2 className="text-2xl">{oompa.first_name}</h2>
        <div className="flex flex-col text-gray-500 italic text-sm">
          <span>{genderConversionObject[oompa.gender || "F"]}</span>
          <span>{oompa.profession || "unknown"}</span>
        </div>
      </article>
    </Link>
  );
};

OompaCard.propTypes = {
  oompa: PropTypes.shape(),
};

OompaCard.defaultProps = {
  oompa: {
    first_name: "Unkown",
    gender: "F",
    id: 0,
    image: "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg",
    last_name: "Unkown",
    profession: "Unkown",
  },
};

export default OompaCard;
