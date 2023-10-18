import React from "react";

import { BiSearch } from "react-icons/bi";

import { SearchOption } from "../../types";
import { truncateString } from "../../helpers";

interface SearchFormProps {
  inputValue: string;
  options: SearchOption[];
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = ({
  inputValue,
  onChangeHandler,
  options,
}: SearchFormProps): JSX.Element => {
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
            <button className="flex items-center justify-between w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer">
              <span className="text-left text-sm ">{option.name}</span>
              <span className="text-xs">
                {truncateString(option.state)} - {option.country}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button className="rounded-r-md border-2 border-zinc-100 text-zinc-100 px-2 py-1 cursor-pointer">
        <BiSearch size={20} />
      </button>
    </React.Fragment>
  );
};

export default SearchForm;
