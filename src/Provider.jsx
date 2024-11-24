import UserBookmarkProvider from "./context/UserBookmarkContext";

const Provider = ({ children }) => {
  return <UserBookmarkProvider>{children}</UserBookmarkProvider>;
};

export default Provider;
