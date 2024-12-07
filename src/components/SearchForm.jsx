import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`/public?tag=${search}`);
  };
  return (
    <form
      className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      onSubmit={handleSearchSubmit}
    >
      <i className="bi bi-search text-sm"></i>
      <input
        type="text"
        placeholder="Search public bookmark by tag"
        className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        value={search}
        required
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
