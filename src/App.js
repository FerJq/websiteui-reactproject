import React from "react";
import {
  Footer,
  Blog,
  Posibility,
  Feature,
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
        <Feature />
        <Posibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
