import React from "react";

import SearchForm from "./components/Icons/SearchForm";
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
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather and select an option
          from the dropdown
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <SearchForm
            inputValue={searchInputValue}
            options={searchOptions}
            selectedCity={selectedCity}
            updateSelectedCity={setSelectedCity}
            onChangeHandler={handleChangeInput}
            onSubmitHandler={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
