import React, { useState } from "react";
import Button from "./Button";
import debounce from "lodash.debounce";
import axiosHelper from "../axios/axiosHelper";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const hideMessage = debounce(() => {
    setMessage("");
  }, 1300);

  const handleButtonClick = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      return;
    }

    try {
      const loginResult = await axiosHelper.post("/auth/login", formData);
      console.log(loginResult.data.message);
    } catch (e) {
      if (e.response && e.response.data.error) {
        setMessage(e.response.data.error);
      }
      console.error(e);
    } finally {
      hideMessage();
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
      <div>
        <label className="font-medium dark:text-white">Email</label>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      <div>
        <label className="font-medium dark:text-white">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      {message && <p className="text-red-500">{message}</p>}
      <Button text={"Sign in"} onClick={handleButtonClick} />
      <div className="text-center">
        <a href="" className="hover:text-primary dark:text-white">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
