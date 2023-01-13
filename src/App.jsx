import React from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Locker from "./Components/Locker";
import Navbar from "./Components/Navbar";
import Token from "./Components/Token";
import Footer from "./Components/Footer";
import { Navdata } from "./assets/Data";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <main className="">
        <div className="md:container px-2 mx-auto">
          <Navbar />
        </div>
        <div className="md:container px-2 mx-auto">
          <Hero />
        </div>
        <div className="md:container px-2 mx-auto">
          <Locker />
        </div>
        <div className="md:container px-2 mx-auto">
          <Token />
        </div>
        <div className="md:container px-2 mx-auto">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
