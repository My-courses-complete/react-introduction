import React from "react";
import "./TodoSearch.css";

export default function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

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
