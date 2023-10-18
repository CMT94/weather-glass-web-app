import React from "react";

import { Forecast, SearchOption } from "../types";

const useForecast = () => {
  const [searchInputValue, setSearchInputValue] = React.useState<string>("");
  const [searchOptions, setSearchOptions] = React.useState<SearchOption[]>([]);
  const [selectedCity, setSelectedCity] = React.useState<SearchOption | null>(
    null
  );
  const [forecast, setForecast] = React.useState<Forecast | null>(null);

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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
  };

  React.useEffect(() => {
    if (selectedCity) {
      setSearchInputValue(selectedCity.name);
      setSearchOptions([]);
    }
  }, [selectedCity]);

  return {
    forecast,
    searchInputValue,
    searchOptions,
    selectedCity,
    setSelectedCity,
    handleChangeInput,
    handleSubmit,
  };
};

export default useForecast;
