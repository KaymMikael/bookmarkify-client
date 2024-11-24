import React from "react";
import SearchBookmark from "./SearchBookmark";

const DashboardHead = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm border-b pb-3 dark:border-gray-500">
      <SearchBookmark />
      <button className="px-4 py-2 text-white font-medium bg-primary hover:opacity-70 active:opacity-60 rounded-lg duration-150">
        <i className="bi bi-bookmark-fill mr-1"></i>New
      </button>
    </div>
  );
};

export default DashboardHead;
