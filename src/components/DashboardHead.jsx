import React from "react";
import TypeMenu from "./TypeMenu";

const DashboardHead = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input
        type="text"
        placeholder="Find a bookmark..."
        className="px-2 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white flex-1"
      />
      <TypeMenu />
      <button className="px-4 py-2 text-white font-medium bg-primary hover:opacity-70 active:opacity-60 rounded-lg duration-150">
        <i className="bi bi-bookmark-fill mr-1"></i>New
      </button>
    </div>
  );
};

export default DashboardHead;
