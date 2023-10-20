import React from "react";

import SearchForm from "./Icons/SearchForm";
import { SearchOption } from "../types";

interface SearchSectionProps {
  searchInputValue: string;
  searchOptions: SearchOption[];
  selectedCity: SearchOption | null;
  updateSelectedCity: React.Dispatch<React.SetStateAction<SearchOption | null>>;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (selectedCity: SearchOption | null) => void;
}

const SearchSection = ({
  searchInputValue,
  searchOptions,
  selectedCity,
  updateSelectedCity,
  handleChangeInput,
  handleSubmit,
}: SearchSectionProps): JSX.Element => {
  return (
    <section className="w-full h-screen md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>
      <p className="text-sm mt-2">
        Enter below a place you want to know the weather and select an option
        from the dropdown
      </p>

      <div className="relative flex  mt-10 md:mt-4">
        <SearchForm
          inputValue={searchInputValue}
          options={searchOptions}
          selectedCity={selectedCity}
          updateSelectedCity={updateSelectedCity}
          onChangeHandler={handleChangeInput}
          onSubmitHandler={handleSubmit}
        />
      </div>
    </section>
  );
};

export default SearchSection;
