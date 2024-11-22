import React from "react";
import PageLayout from "./PageLayout";

const About = () => {
  return (
    <section className="section-min-height scroll-mt-16" id="about">
      <PageLayout>
        <h2 className="text-4xl text-center font-bold mt-4 dark:text-white">
          About BookMarkify
        </h2>
        <p className="max-w-4xl mx-auto text-center text-l dark:text-white my-6">
          Welcome to <em>BookMarkify</em>, your go-to platform for simplifying
          your online browsing experience. We understand how overwhelming it can
          be to keep track of the countless useful websites and resources you
          come across daily. That’s why we created BookMarkify – to give you a
          smarter, more organized way to save and manage your favorite links.
        </p>
        <p className="text-2xl text-primary font-bold text-center">
          With BookMarkify, you can:
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-white items-center md:items-stretch my-6">
          <div className="bg-primary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">📥</span>
            <p className="text-3xl my-3 text-center">Save & Store</p>
            <p className="text-lg text-center leading-relaxed">
              Securely save your most important links and websites in one
              convenient location.
            </p>
          </div>
          <div className="bg-primary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">🏷️</span>
            <p className="text-3xl my-3 text-center">Categorize & Tag</p>
            <p className="text-lg text-center leading-relaxed">
              Organize your bookmarks by topics and tags for easy access.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">🤝</span>
            <p className="text-3xl my-3 text-center">Share with Ease</p>
            <p className="text-lg text-center leading-relaxed">
              Choose to keep your bookmarks private or share them with friends,
              colleagues, or the public.
            </p>
          </div>
        </div>
        <p className="text-2xl text-primary font-bold text-center">
          Why Choose BookMarkify?
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-white items-center md:items-stretch my-6">
          <div className="bg-secondary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">🖱️</span>
            <p className="text-3xl my-3 text-center">User-Friendly</p>
            <p className="text-lg text-center leading-relaxed">
              Simple, clean, and easy to navigate.
            </p>
          </div>
          <div className="bg-primary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">🔒</span>
            <p className="text-3xl my-3 text-center">Privacy Control</p>
            <p className="text-lg text-center leading-relaxed">
              Decide which bookmarks stay private and which ones you share.
            </p>
          </div>
          <div className="bg-primary p-8 rounded flex flex-col items-center w-2/3">
            <span className="text-4xl">🔍</span>
            <p className="text-3xl my-3 text-center">Quick Search</p>
            <p className="text-lg text-center leading-relaxed">
              Find what you need instantly with our powerful search
              functionality.
            </p>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default About;
