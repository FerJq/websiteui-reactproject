import React from "react";
import {
  Footer,
  Blog,
  Posibility,
  Features,
  WhatGPT3,
  Header,
} from "./container";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Posibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
