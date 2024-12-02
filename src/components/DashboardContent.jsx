import React, { useContext, useEffect, useState, useCallback } from "react";
import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";
import axiosHelper from "../axios/axiosHelper";
import { useAuth } from "../hooks/useAuth";
import { UserBookmarkContext } from "../context/UserBookmarkContext";

const DashboardContent = () => {
  const { setUserBookmarks } = useContext(UserBookmarkContext);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const fetchUserBookmark = useCallback(async () => {
    try {
      const result = await axiosHelper.get(`/bookmark/${user.user_id}`);
      setUserBookmarks(result.data);
    } catch (e) {
      console.error(`Error fetching data: ${e}`);
    } finally {
      setLoading(false);
    }
  }, [user.user_id, setUserBookmarks]);

  useEffect(() => {
    fetchUserBookmark();
  }, [fetchUserBookmark]);

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
