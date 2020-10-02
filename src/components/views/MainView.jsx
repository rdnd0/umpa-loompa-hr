import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import upArrowIcon from "../../assets/round_up_arrow_icon.png";
import { useSWRInfinite } from "swr";
import { getKey } from "../../utils/SWRConfig";

import getFilteredArray from "../../utils/getFilteredArray";
import useDebounce from "../../hooks/useDebounce";
import Header from "../Header";
import SearchBar from "../SearchBar";
import DoubleTitle from "../DoubleTitle";
import OompasGrid from "../OompasGrid";
import Icon from "../Icon";

const MainView = () => {
  const { data, size, setSize } = useSWRInfinite(getKey);
  const [oompasFilteredData, setOompasFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      setOompasFilteredData([]);
      const { filteredItems, areResultsEmpty } = getFilteredArray(
        debouncedSearchValue,
        data
      );
      if (areResultsEmpty) setIsResultEmpty(areResultsEmpty);
      if (filteredItems && filteredItems.length)
        setOompasFilteredData(filteredItems);
    } else {
      setOompasFilteredData(data);
    }
  }, [data, debouncedSearchValue, isResultEmpty]);

  useEffect(() => {
    if (data) setOompasFilteredData(data);
  }, [data]);

  return (
    <>
      <Header title="Oompa Loompas' Crew" />
      <SearchBar provideSearchValue={setSearchValue} />
      <DoubleTitle
        mainTitle="Find your Oompa Loompa"
        secondaryTitle="There are more than 100k"
      />
      <OompasGrid
        data={oompasFilteredData}
        setSize={setSize}
        size={size}
        searchValue={searchValue}
        isResultEmpty={isResultEmpty}
      />
      <ScrollToTop showUnder={160}>
        <Icon
          classes=""
          imgSrc={upArrowIcon}
          altText="go-up-arrow"
          width="50px"
        />
      </ScrollToTop>
    </>
  );
};

export default MainView;
