import BookmarkItem from "./BookmarkItem";

const BookmarkList = ({ bookmarks }) => {
  return (
    <ul>
      {bookmarks.length === 0 ? (
        <p className="text-center text-2xl mt-2">Nothing to see here...</p>
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkItem bookMark={bookmark} key={bookmark.bookmarkId} />
        ))
      )}
    </ul>
  );
};

export default BookmarkList;
