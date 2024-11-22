import React from "react";
import { Link } from "react-router-dom";
import IntroImage from "../assets/img/IntroImage.png";
import PageLayout from "./PageLayout";

const Hero = () => {
  return (
    <section className="section-min-height scroll-mt-20" id="hero">
      <PageLayout>
        <div className="flex flex-row items-center justify-center mt-12">
          <div className="lg:w-1/2">
            <h1 className="text-center text-5xl md:text-6xl lg:text-left dark:text-white leading-relaxed md:leading-relaxed">
              Simplify Your Web Experience with{" "}
              <span className="text-accent font-bold">BookMarkify</span>
            </h1>
            <p className="text-center lg:text-left my-4 text-slate-500 dark:text-slate-300">
              Save, categorize, and share your favorite links effortlessly.
              Organize your online discoveries, keep them private or share them
              with the world, all in one intuitive platform.
            </p>
            <div className="flex justify-center gap-3 lg:justify-start">
              <Link
                to={"/register"}
                className="bg-primary px-4 py-2 rounded-full hover:opacity-70 active:opacity-50 text-white"
              >
                Get Started for Free
              </Link>
              <Link
                to={"/"}
                className="border border-solid border-primary px-4 py-2 rounded-full active:opacity-50 hover:opacity-70 dark:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:block w-1/2">
            <img
              src={IntroImage}
              alt="laptop screen with tags and links popping up in an organized layout"
              className="rounded-full w-2/3 ms-auto"
              loading="lazy"
            />
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default Hero;
