import React from "react";
import "./TodoSearch.css";

type TodoSearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoSearch({ searchValue, setSearchValue }: TodoSearchProps) {
  return (
    <input
      placeholder="Cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
