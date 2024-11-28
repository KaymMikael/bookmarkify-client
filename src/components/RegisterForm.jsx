import React, { useState } from "react";
import Button from "./Button";
import axiosHelper from "../axios/axiosHelper";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  //Function to hide message and reset error
  const hideMessage = () => {
    setTimeout(() => {
      setMessage("");
      setHasError(false);
    }, 1300);
  };

  const handleButtonClick = async () => {
    //reset message and error
    hideMessage();
    if (password !== confirmPassword) {
      setMessage("Password doesn't match");
      setHasError(true);
      hideMessage();
      return;
    }

    try {
      const result = await axiosHelper.post("/auth/register", {
        name,
        email,
        password,
      });
      setMessage(result.data.message);
      console.log(result.data.userId);
      //Reset inputs
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (e) {
      setHasError(true);
      //check any error from the api
      if (e.response && e.response.data.error) {
        setMessage(e.response.data.error);
      }
      console.log(e.message);
      hideMessage();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label className="font-medium">Name</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          minLength={4}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input
          type="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          min={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          min={8}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {message && (
        <p className={hasError ? "text-red-500" : "text-green-500"}>
          {message}
        </p>
      )}
      <Button text={"Create account"} onClick={handleButtonClick} />
    </form>
  );
};

export default RegisterForm;
