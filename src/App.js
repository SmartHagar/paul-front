/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

import "./App.css";
import Artikel from "./pages/Artikel/Artikel";
import Berita from "./pages/Berita/Berita";
import Galeri from "./pages/Galeri/Galeri";
import Visi from "./pages/Visi";
import Misi from "./pages/Misi";

function App() {
  return (
    <div className="App min-h-screen bg-base-200">
      <Header />
      <TopBar />
      <div className="mx-6 my-4 lg:mx-10 font-work">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="berita" element={<Berita />} />
          <Route path="visi" element={<Visi />} />
          <Route path="misi" element={<Misi />} />
          <Route path="galeri" element={<Galeri />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
