import React from "react";
import TypeMenu from "./TypeMenu";

const SearchBookmark = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Find a bookmark..."
        className="px-2 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white flex-1"
      />
      <TypeMenu />
    </>
  );
};

export default SearchBookmark;
