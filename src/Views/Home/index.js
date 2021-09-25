import React from "react";
import About from "./About";
import Conference from "./Conference";
import AboutEvents from "./Events";
import Hero from "./Hero";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <>
      {" "}
      <Hero /> <About /> <Conference /> <AboutEvents /> <Newsletter />
    </>
  );
};

export default Home;
