import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import oompaLogo from "../assets/logo-umpa-loompa.png";

const iconClasses = "max-w-8";
const iconAltText = "umpa-loompa-logo";

const Header = ({ redirectHome, title }) => {
  return (
    <header className="bg-gray-500 pl-40 py-2 flex">
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
      <span className="pl-8">{title}</span>
    </header>
  );
};

Header.propTypes = {
  redirectHome: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  redirectHome: false,
  title: "",
};

export default Header;
