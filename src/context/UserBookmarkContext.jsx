import { createContext, useState } from "react";

export const UserBookmarkContext = createContext();

const UserBookmarkProvider = ({ children }) => {
  const [userBookmarks, setUserBookmarks] = useState([]);

  return (
    <UserBookmarkContext.Provider
      value={{
        userBookmarks,
        setUserBookmarks,
      }}
    >
      {children}
    </UserBookmarkContext.Provider>
  );
};

export default UserBookmarkProvider;
