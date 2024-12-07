import BookMarkifyLogo from "../assets/img/BookMarkifyLogoTransparent.png";
import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <section className="section-min-height flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-slate-500">
        <div className="text-center">
          <Link to={"/"}>
            <img
              src={BookMarkifyLogo}
              width={150}
              className="mx-auto rounded"
              loading="lazy"
            />
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl dark:text-white">
              Log in to your account
            </h3>
            <p className="dark:text-white">
              Don't have an account?{" "}
              <Link
                className="font-medium text-primary hover:underline decoration-accent underline-offset-8 decoration-2"
                to={"/register"}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default LogInPage;
