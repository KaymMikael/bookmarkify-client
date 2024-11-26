import { createContext, useState } from "react";

export const UserBookmarkContext = createContext();

const UserBookmarkProvider = ({ children }) => {
  const [userBookmarks, setUserBookmarks] = useState([
    {
      id: 1,
      userId: 1,
      title: "React Documentation",
      url: "https://reactjs.org/",
      tags: ["react", "frontend", "documentation"],
      createdAt: new Date(),
      isPublic: true,
    },
    {
      id: 2,
      userId: 1,
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      tags: ["web-development", "reference", "frontend"],
      createdAt: new Date(),
      isPublic: false,
    },
    {
      id: 3,
      userId: 1,
      title: "Github",
      url: "https://developer.mozilla.org/",
      tags: ["web-development", "reference", "version-control-ystem"],
      createdAt: new Date(),
      isPublic: false,
    },
  ]);
  const [filteredBookmarks, setFilteredBookmarks] = useState(userBookmarks);

  return (
    <UserBookmarkContext.Provider
      value={{
        filteredBookmarks,
        setFilteredBookmarks,
        userBookmarks,
        setUserBookmarks,
      }}
    >
      {children}
    </UserBookmarkContext.Provider>
  );
};

export default UserBookmarkProvider;
