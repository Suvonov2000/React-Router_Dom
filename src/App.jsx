import React from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import PostsById from "./pages/PostsById";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:idPost" element={<PostsById />} />
      </Routes>
    </div>
  );
};

export default App;
