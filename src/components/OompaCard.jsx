import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageWithLoading from "./ImageWithLoading";
import OompaNameTag from "./OompaNameTag";
import OompaPersonalDetails from "./OompaPersonalDetails";

const OompaCard = ({ oompa }) => {
  return (
    <Link to={`/${oompa.id}`}>
      <article>
        <ImageWithLoading src={oompa.image} alt="oompa's file" />
        <OompaNameTag firstName={oompa.first_name} />
        <OompaPersonalDetails
          gender={oompa.gender}
          profession={oompa.profession}
        />
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
    image: "",
    last_name: "Unkown",
    profession: "Unkown",
  },
};

export default OompaCard;
