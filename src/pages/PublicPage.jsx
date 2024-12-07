import React from "react";
import SideBar from "../components/SideBar";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchPublicBookmarks } from "../api/BookMark";
import BookmarkList from "../components/BookmarkList";

const PublicPage = () => {
  const { user } = useAuth();
  const {
    data: publicBookmarks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["publicBookmarks"],
    queryFn: fetchPublicBookmarks,
    staleTime: Infinity,
  });
  return (
    <section>
      <SideBar />
      <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
        <div className="max-w-4xl mx-auto">
          <BookmarkList
            bookmarks={publicBookmarks}
            loading={isLoading}
            user={user}
          />
        </div>
      </div>
    </section>
  );
};

export default PublicPage;
