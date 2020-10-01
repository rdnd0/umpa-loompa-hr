const getFilteredArray = (searchValue, data) => {
  const searchStringLowerCased = searchValue.toLowerCase();
  let filteredItems = [];

  filteredItems = data.map((oompas) => {
    return {
      ...oompas,
      results: oompas.results?.filter(
        (oompa) =>
          oompa.first_name.toLowerCase().includes(searchStringLowerCased) ||
          oompa.last_name.toLowerCase().includes(searchStringLowerCased) ||
          oompa.profession.toLowerCase().includes(searchStringLowerCased)
      ),
    };
  });

  let areResultsEmpty = false;
  filteredItems.forEach((items) => {
    areResultsEmpty = !Boolean(items.results.length);
  });

  return { filteredItems, areResultsEmpty };
};

export default getFilteredArray;
