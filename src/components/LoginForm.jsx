import React from "react";

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
      <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:opacity-70 active:opacity-60 rounded-lg duration-150">
        Sign in
      </button>
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
