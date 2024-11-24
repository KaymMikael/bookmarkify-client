import React, { useState } from "react";
import BookmarkList from "./BookmarkList";

const DashboardBody = () => {
  const [userBookmarks, setUserBookmarks] = useState([
    {
      bookMarkId: 1,
      userId: 1,
      title: "React Documentation",
      url: "https://reactjs.org/",
      tags: ["react", "frontend", "documentation"],
      createdAt: new Date(),
      isPublic: true,
    },
    {
      bookMarkId: 2,
      userId: 1,
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      tags: ["web-development", "reference", "frontend"],
      createdAt: new Date(),
      isPublic: false,
    },
    {
      bookMarkId: 3,
      userId: 1,
      title: "Github",
      url: "https://developer.mozilla.org/",
      tags: ["web-development", "reference", "version-control-ystem"],
      createdAt: new Date(),
      isPublic: false,
    },
  ]);
  return <BookmarkList userBookmarks={userBookmarks} />;
};

export default DashboardBody;
