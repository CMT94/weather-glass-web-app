import React from "react";

import { BiSearch } from "react-icons/bi";

import { SearchOption } from "../../types";
import { truncateString } from "../../helpers";

interface SearchFormProps {
  inputValue: string;
  options: SearchOption[];
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (selectedCity: SearchOption | null) => void;
  selectedCity: SearchOption | null;
  updateSelectedCity: React.Dispatch<React.SetStateAction<SearchOption | null>>;
}

const SearchForm = ({
  inputValue,
  options,
  onChangeHandler,
  onSubmitHandler,
  selectedCity,
  updateSelectedCity,
}: SearchFormProps): JSX.Element => {
  const onSelectHandler = (option: SearchOption) => {
    updateSelectedCity(option);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        value={inputValue}
        className="px-2 py-1 rounded-l-md border-2 border-white outline-none"
        onChange={onChangeHandler}
      />
      <ul className="absolute top-9 bg-white my-1 rounded-md w-full">
        {options.map((option: SearchOption, optionIndex: number) => (
          <li key={optionIndex} className="w-full">
            <button
              className="flex items-center justify-between w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
              onClick={() => onSelectHandler(option)}
            >
              <span className="text-sm">{option.name}</span>
              <span className="text-xs">
                {truncateString(option.state)} - {option.country}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`rounded-r-md border-2 border-zinc-100 text-zinc-100 px-2 py-1 duration-200 ${
          !selectedCity
            ? "cursor-default"
            : "cursor-pointer hover:bg-zinc-700/20"
        }`}
        onClick={() => onSubmitHandler(selectedCity)}
        disabled={!selectedCity}
      >
        <BiSearch size={20} />
      </button>
    </React.Fragment>
  );
};

export default SearchForm;
