import { createContext, useState } from "react";

export const UserBookmarkContext = createContext();

const UserBookmarkProvider = ({ children }) => {
  const [userBookmarks, setUserBookmarks] = useState([]);
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
