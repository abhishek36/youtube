import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";

const App = () => {
  const [sideBar, setSideBar] = useState(true);
  return (
    <BrowserRouter>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
