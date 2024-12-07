import { Link } from "react-router-dom";
import BookMarkifyLogo from "../assets/img/BookMarkifyLogoTransparent.png";
import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="section-min-height flex flex-col items-center justify-center px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
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
              Create an account
            </h3>
            <p className="dark:text-white">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-primary hover:underline decoration-accent underline-offset-8 decoration-2"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
