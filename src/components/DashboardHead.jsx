import React, { useContext } from "react";
import SearchBookmark from "./SearchBookmark";
import { UserBookmarkContext } from "../context/UserBookmarkContext";

const DashboardHead = () => {
  const { userBookmarks, setFilteredBookmarks } =
    useContext(UserBookmarkContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm border-b pb-3 dark:border-gray-500">
      <SearchBookmark
        userBookmarks={userBookmarks}
        setFilteredBookmarks={setFilteredBookmarks}
      />
    </div>
  );
};

export default DashboardHead;
