import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchPublicBookmarks } from "../api/BookMark";
import BookmarkList from "../components/BookmarkList";

const PublicPage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get("tag") || "";

  const {
    data: publicBookmarks,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["publicBookmarks", tag],
    queryFn: () => fetchPublicBookmarks(tag),
  });

  return (
    <section>
      <SideBar />
      <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
        <div className="max-w-4xl mx-auto">
          <BookmarkList
            bookmarks={publicBookmarks}
            loading={isFetching}
            user={user}
          />
        </div>
      </div>
    </section>
  );
};

export default PublicPage;
