import React, { useContext } from "react";
import BookmarkItem from "./BookmarkItem";
import { UserBookmarkContext } from "../context/UserBookmarkContext";

const BookmarkList = () => {
  const { filteredBookmarks } = useContext(UserBookmarkContext);
  return (
    <ul>
      {filteredBookmarks.length && filteredBookmarks ? (
        filteredBookmarks.map((bookmark) => (
          <BookmarkItem bookMark={bookmark} key={bookmark.id} />
        ))
      ) : (
        <p>Nothing to see here...</p>
      )}
    </ul>
  );
};

export default BookmarkList;
