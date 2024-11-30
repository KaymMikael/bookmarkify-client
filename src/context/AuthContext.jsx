import { createContext, useEffect, useState } from "react";
import axiosHelper from "../axios/axiosHelper";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (data) => {
    await axiosHelper.post("/auth/login", data);
    const authResult = await axiosHelper.get("/auth");
    setUser(authResult.data);
    navigate("/dashboard");
  };

  const logout = async () => {
    await axiosHelper.get("/auth/logout");
    setUser(null);
    navigate("/login");
  };

  const checkAuth = async () => {
    try {
      const authResult = await axiosHelper.get("/auth");
      setUser(authResult.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      await checkAuth();
    };
    verifyUser();
  }, []);

  if (loading) {
    return <div className="text-center mt-2">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
