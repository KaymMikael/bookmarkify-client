import React from "react";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
      <div>
        <label className="font-medium dark:text-white">Email</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      <div>
        <label className="font-medium dark:text-white">Password</label>
        <input
          type="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </div>
      <Button text={"Sign in"} onClick={() => console.log("clicked")} />
      <div className="text-center">
        <a
          href="javascript:void(0)"
          className="hover:text-primary dark:text-white"
        >
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
