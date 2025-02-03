import React from "react";

const SearchBox = ({ seacrh, onSearchChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={seacrh}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-full mb-4 shadow-md"
      />
    </>
  );
};

export default SearchBox;
