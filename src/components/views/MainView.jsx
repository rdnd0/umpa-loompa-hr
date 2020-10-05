import React, { useState, useEffect } from "react";
import { useSWRInfinite } from "swr";
import { getKey } from "../../utils/SWRConfig";

import getFilteredArray from "../../utils/getFilteredArray";
import useDebounce from "../../hooks/useDebounce";
import Header from "../Header";
import SearchBar from "../SearchBar";
import DoubleTitle from "../DoubleTitle";
import OompasGrid from "../OompasGrid";
import ScrollToTopButton from "../ScrollToTopButton";

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
      setIsResultEmpty(areResultsEmpty);
      if (filteredItems && filteredItems.length)
        setOompasFilteredData(filteredItems);
    } else {
      setIsResultEmpty(false);
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
      <ScrollToTopButton />
    </>
  );
};

export default MainView;
