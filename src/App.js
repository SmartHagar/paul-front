/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-base-200">
      <Header />
      <TopBar />
      <div className="mx-6 my-4 lg:mx-10 font-work">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
