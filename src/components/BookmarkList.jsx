import BookmarkItem from "./BookmarkItem";
import BookGIF from "../assets/img/BookGIF.gif";

const BookmarkList = ({ bookmarks, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center mt-2">
        <img src={BookGIF} alt="Book" className="rounded-full" />
      </div>
    );
  }

  return (
    <ul>
      {bookmarks.length ? (
        bookmarks.map((bookmark) => (
          <BookmarkItem bookMark={bookmark} key={bookmark.bookmarkId} />
        ))
      ) : (
        <p className="text-center text-2xl mt-2">No bookmarks available.</p>
      )}
    </ul>
  );
};

export default BookmarkList;
