import React, { useState } from "react";
import { debounce } from "lodash";
import Button from "./Button";
import axiosHelper from "../axios/axiosHelper";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hideMessage = debounce(() => {
    setMessage("");
    setHasError(false);
  }, 1300);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleButtonClick = async () => {
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      setHasError(true);
      hideMessage();
      return;
    }

    setIsLoading(true);

    try {
      const body = { name: name.trim(), email: email.trim(), password };
      const result = await axiosHelper.post("/auth/register", body);
      setMessage(result.data.message);
      console.log(result.data.userId);
      // Reset inputs
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      setHasError(true);
      if (e.response && e.response.data.error) {
        setMessage(e.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      console.log(e.message);
    } finally {
      setIsLoading(false);
      hideMessage();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label className="font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={4}
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input
          type="password"
          name="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={8}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={8}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      {message && (
        <p className={hasError ? "text-red-500" : "text-green-500"}>
          {message}
        </p>
      )}
      <Button text={isLoading ? "Creating..." : "Create account"} onClick={handleButtonClick} disabled={isLoading} />
    </form>
  );
};

export default RegisterForm;
