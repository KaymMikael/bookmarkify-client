import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <hr className="w-1/2 border-accent mx-auto" />
      <About />
      <hr className="w-1/2 border-accent mx-auto" />
    </>
  );
};

export default Home;
