import React from "react";

import { BiSearch } from "react-icons/bi";

import { SearchOption } from "../../types";

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
      <button className="rounded-r-md border-2 border-zinc-100 text-zinc-100 px-2 py-1 cursor-pointer">
        <BiSearch size={20} />
      </button>
    </React.Fragment>
  );
};

export default SearchForm;
