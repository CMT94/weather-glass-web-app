import ForecastSection from "./components/ForecastSection";
import SearchSection from "./components/SearchSection";

import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const {
    forecast,
    searchInputValue,
    searchOptions,
    selectedCity,
    setSelectedCity,
    handleChangeInput,
    handleSubmit,
    resetForecast,
  } = useForecast();

  return (
    <main className="h-full w-full sm:h-screen flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
      {forecast ? (
        <ForecastSection
          forecastData={forecast}
          resetForecast={resetForecast}
        />
      ) : (
        <SearchSection
          searchInputValue={searchInputValue}
          searchOptions={searchOptions}
          selectedCity={selectedCity}
          updateSelectedCity={setSelectedCity}
          handleChangeInput={handleChangeInput}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default App;
