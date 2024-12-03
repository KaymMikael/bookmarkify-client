import BookmarkList from "./BookmarkList";
import useFetch from "../hooks/useFetch";
import { useAuth } from "../hooks/useAuth";

const DashboardBody = () => {
  const { user } = useAuth();
  const { data: userBookmarks, loading } = useFetch(
    `/bookmark/${user.user_id}`
  );
  return <BookmarkList bookmarks={userBookmarks} loading={loading} />;
};

export default DashboardBody;
