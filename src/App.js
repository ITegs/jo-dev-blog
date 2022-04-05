import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Article from "./Pages/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
