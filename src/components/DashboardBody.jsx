import { useContext } from "react";
import BookmarkList from "./BookmarkList";
import { UserBookmarkContext } from "../context/UserBookmarkContext";

const DashboardBody = () => {
  const { filteredBookmarks } = useContext(UserBookmarkContext);
  return <BookmarkList bookmarks={filteredBookmarks} />;
};

export default DashboardBody;
