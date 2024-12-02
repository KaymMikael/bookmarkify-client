import React, { useContext } from "react";
import BookmarkItem from "./BookmarkItem";
import { UserBookmarkContext } from "../context/UserBookmarkContext";

const BookmarkList = () => {
  const { filteredBookmarks } = useContext(UserBookmarkContext);
  return (
    <ul>
      {filteredBookmarks.length === 0 ? (
        <p className="text-center text-2xl mt-2">Nothing to see here...</p>
      ) : (
        filteredBookmarks.map((bookmark) => (
          <BookmarkItem bookMark={bookmark} key={bookmark.bookmarkId} />
        ))
      )}
    </ul>
  );
};

export default BookmarkList;
