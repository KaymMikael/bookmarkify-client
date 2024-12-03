import AuthProvider from "./context/AuthContext";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
