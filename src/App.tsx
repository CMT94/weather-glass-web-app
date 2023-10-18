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
  } = useForecast();

  console.log({ forecast });
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <>We have forecast</>
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
