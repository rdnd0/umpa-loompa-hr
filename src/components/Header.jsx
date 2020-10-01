import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import oompaLogo from "../assets/logo-umpa-loompa.png";

const iconClasses = "max-w-8";
const iconAltText = "umpa-loompa-logo";

const Header = ({ redirectHome }) => {
  return (
    <header className="bg-gray-500 pl-16 p-2 flex">
      {redirectHome ? (
        <Link to="/">
          <Icon
            classes={iconClasses}
            imgSrc={oompaLogo}
            altText={iconAltText}
          />
        </Link>
      ) : (
        <Icon classes={iconClasses} imgSrc={oompaLogo} altText={iconAltText} />
      )}
      <span className="pl-6">Oompa Loompas' Crew</span>
    </header>
  );
};

Header.propTypes = {
  redirectHome: PropTypes.bool,
};

Header.defaultProps = {
  redirectHome: false,
};

export default Header;
