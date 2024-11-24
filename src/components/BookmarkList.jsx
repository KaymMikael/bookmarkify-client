import React from "react";
import BookmarkItem from "./BookmarkItem";

const BookmarkList = ({ userBookmarks }) => {
  return (
    <ul>
      {userBookmarks.length && userBookmarks ? (
        userBookmarks.map((bookmark) => (
          <BookmarkItem bookMark={bookmark} key={bookmark.bookMarkId} />
        ))
      ) : (
        <p>Nothing to see here...</p>
      )}
    </ul>
  );
};

export default BookmarkList;
