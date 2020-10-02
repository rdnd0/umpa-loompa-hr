import React from "react";
import Icon from "./Icon";

import searchIcon from "../assets/ic_search.png";

const SearchBar = ({ provideSearchValue }) => {
  const handleInputChange = (e) => {
    provideSearchValue(e?.target?.value || "");
  };
  return (
    <div className="flex justify-end">
      <div className="mr-40 my-8 mx-auto relative flex">
        <input
          className=" appearance-none border border-gray-500 rounded w-full  text-gray-900 placeholder-gray-900 leading-tight focus:border-gray-700 focus:outline-none p-2 pl-4 pr-15"
          type="text"
          placeholder="Search"
          id="searchText"
          onChange={handleInputChange}
        />
        <div className="flex items-center absolute right-0 top-0 mr-4 mt-0 ">
          <span className="text-2xl text-gray-500 font-hairline">|</span>
          <Icon
            classes="ml-2"
            imgSrc={searchIcon}
            altText="search"
            width="19px"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
