import React, { useState, useEffect } from "react";
import { useSWRInfinite } from "swr";
import { getKey } from "../../utils/SWRConfig";

import getFilteredArray from "../../utils/getFilteredArray";
import useDebounce from "../../hooks/useDebounce";
import Header from "../Header";
import OompasGrid from "../OompasGrid";
import SearchBar from "../SearchBar";

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
      <Header />
      <SearchBar provideSearchValue={setSearchValue} />
      <OompasGrid
        data={oompasFilteredData}
        setSize={setSize}
        size={size}
        searchValue={searchValue}
        isResultEmpty={isResultEmpty}
      />
    </>
  );
};

export default MainView;
