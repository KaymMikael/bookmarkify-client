import BookmarkList from "./BookmarkList";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchUserBookmarkByUserId } from "../api/BookMark";

const DashboardBody = () => {
  const { user } = useAuth();
  const {
    data: userBookmarks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userBookmarks", user.user_id],
    queryFn: () => fetchUserBookmarkByUserId(user.user_id),
    staleTime: Infinity,
  });

  if (isError) {
    return (
      <p className="text-red-500">An error occurred while getting data.</p>
    );
  }

  return (
    <BookmarkList bookmarks={userBookmarks} loading={isLoading} user={user} />
  );
};

export default DashboardBody;
