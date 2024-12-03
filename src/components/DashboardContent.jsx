import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";
import { useAuth } from "../hooks/useAuth";
import { UserBookmarkContext } from "../context/UserBookmarkContext";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect } from "react";

const DashboardContent = () => {
  const { setUserBookmarks } = useContext(UserBookmarkContext);
  const { user } = useAuth();
  const { data, loading } = useFetch(`/bookmark/${user.user_id}`);

  useEffect(() => {
    if (data && !loading) {
      setUserBookmarks(data);
    }
  }, [data]);

  return (
    <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
      <div className="max-w-4xl mx-auto">
        <DashboardHead />
        <DashboardBody />
      </div>
    </div>
  );
};

export default DashboardContent;
