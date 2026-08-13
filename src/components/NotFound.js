import React from "react";
import { FaSpinner } from "react-icons/fa";
import Header from "./Header";
import "../components/pages.css";

function App() {
  return (
    <>
      <Header />

      <section className="location-box">
        <FaSpinner className="rotate-icon" />

        <h1>This page is avalable in your area</h1>
      </section>
    </>
  );
}

export default App;
