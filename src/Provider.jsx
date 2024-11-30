import AuthProvider from "./context/AuthContext";
import UserBookmarkProvider from "./context/UserBookmarkContext";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserBookmarkProvider>{children}</UserBookmarkProvider>
    </AuthProvider>
  );
};

export default Provider;
