import React from "react";
import ScrollToTop from "react-scroll-up";
import upArrowIcon from "../assets/round_up_arrow_icon.png";
import Icon from "./Icon";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={160}>
      <Icon
        classes=""
        imgSrc={upArrowIcon}
        altText="go-up-arrow"
        width="50px"
      />
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
