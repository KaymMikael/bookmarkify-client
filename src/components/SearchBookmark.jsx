import React, { useState, useCallback } from "react";
import TypeMenu from "./TypeMenu";
import debounce from "lodash.debounce";

const SearchBookmark = ({ userBookmarks, setFilteredBookmarks }) => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(
    (searchTerm) => {
      const filtered = userBookmarks.filter(
        (bookmark) =>
          bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bookmark.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredBookmarks(filtered);
    },
    [userBookmarks, setFilteredBookmarks]
  );

  const handleSearchKey = useCallback(
    debounce((e) => {
      if (e.key === "Enter") {
        handleSearch(search);
      }
    }, 300),
    [search, handleSearch]
  );

  return (
    <>
      <input
        type="text"
        placeholder="Find a bookmark..."
        aria-label="Search for a bookmark"
        className="px-2 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearchKey}
      />
      <TypeMenu />
    </>
  );
};

export default SearchBookmark;
