import BookmarkItem from "./BookmarkItem";

const BookmarkList = ({ bookmarks, loading }) => {
  if (loading) {
    return <p className="text-center text-2xl mt-2">Loading...</p>;
  }

  return (
    <ul>
      {bookmarks.length ? (
        bookmarks.map(({ bookmarkId, ...bookmark }) => (
          <BookmarkItem bookMark={bookmark} key={bookmarkId} />
        ))
      ) : (
        <p className="text-center text-2xl mt-2">Nothing to see here...</p>
      )}
    </ul>
  );
};

export default BookmarkList;
