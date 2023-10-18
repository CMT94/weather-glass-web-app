import React from "react";

import SearchSection from "./components/SearchSection";
import { SearchOption } from "./types";

const App = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = React.useState<string>("");
  const [searchOptions, setSearchOptions] = React.useState<SearchOption[]>([]);
  const [selectedCity, setSelectedCity] = React.useState<SearchOption | null>(
    null
  );

  const getSearchOptions = async (search: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSearchOptions(data));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    if (e.target.value === "") {
      setSearchOptions([]);
      return;
    }

    getSearchOptions(e.target.value);
  };

  const handleSubmit = (selectedCity: SearchOption | null) => {
    if (!selectedCity) return;
    getCityForecast(selectedCity);
  };

  const getCityForecast = (city: SearchOption) => {
    const { lat, lon } = city;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  React.useEffect(() => {
    if (selectedCity) {
      setSearchInputValue(selectedCity.name);
      setSearchOptions([]);
    }
  }, [selectedCity]);

  return (
    <SearchSection
      searchInputValue={searchInputValue}
      searchOptions={searchOptions}
      selectedCity={selectedCity}
      updateSelectedCity={setSelectedCity}
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default App;
