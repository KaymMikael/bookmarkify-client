import React from "react";
import { useAuth } from "../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white hover:scale-90">
      <i className="bi bi-box-arrow-in-right"></i>
      <button
        className="text-[15px] ml-4 text-gray-200 font-bold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
