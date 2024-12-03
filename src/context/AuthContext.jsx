import { createContext, useEffect, useState } from "react";
import axiosHelper from "../axios/axiosHelper";
import { useNavigate } from "react-router-dom";
import CircleGIF from "../assets/img/CircleGIF.gif";

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
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      await checkAuth();
    };
    verifyUser();
  }, []);

  if (loading) {
    return (
      <div className="pt-32 flex justify-center">
        <img src={CircleGIF} alt="Circle spinner" className="rounded-full"/>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
