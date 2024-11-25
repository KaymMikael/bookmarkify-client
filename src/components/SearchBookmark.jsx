import React, { useState, useCallback, useEffect } from "react";
import TypeMenu from "./TypeMenu";
import debounce from "lodash.debounce";

const SearchBookmark = ({ userBookmarks, setFilteredBookmarks }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      // Filter the userBookmarks array
      const filtered = userBookmarks.filter((bookmark) => {
        // Check if the bookmark title or tags match the search term
        const matchesSearch =
          bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bookmark.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );
        // Check if the bookmark matches the filter type
        const matchesFilter =
          filterType === "all" ||
          (filterType === "public" && bookmark.isPublic) ||
          (filterType === "private" && !bookmark.isPublic);
        // Return true if both conditions are met
        return matchesSearch && matchesFilter;
      });
      // Update the filtered bookmarks state
      setFilteredBookmarks(filtered);
    }, 300), // Debounce delay
    [userBookmarks, filterType] // Dependencies
  );

  useEffect(() => {
    handleSearch(search);
  }, [userBookmarks, filterType, search, handleSearch]);

  return (
    <>
      <input
        type="text"
        placeholder="Find a bookmark..."
        aria-label="Search for a bookmark"
        className="px-2 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TypeMenu setFilterType={setFilterType} />
    </>
  );
};

export default SearchBookmark;
