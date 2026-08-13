import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leader from "./components/Leader";
import Eglise from "./components/Eglise";
import Message from "./components/Messager";
import Donner from "./components/NotFound";
import "../src/style.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/leader" element={<Leader />} />
      <Route path="/eglise" element={<Eglise />} />
      <Route path="/messager" element={<Message />} />
      <Route path="*" element={<Donner />} />
    </Routes>
  );
}

export default App;
