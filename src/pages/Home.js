import React from "react";
import { useState } from "react";
import { lazy } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Sidebar from "../components/EGLISE (2)";
import Messager from "../components/MESSAGER (2)";
import Verse from "../components/Verse";
import Leader from "../components/LEADER (2)";
import Contact from "../components/Contact";
import Footer from "../components/Pictur";
import "../style.css";
import Image1 from "../img/background.jpeg";
import Image2 from "../img/background1.jpeg";
import Image3 from "../img/background2.jpeg";
import Image4 from "../img/background3.jpeg";
import Image5 from "../img/background4.jpeg";

function Home() {
  const images = [Image1, Image2, Image3, Image4, Image5];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Header2 />
      <Sidebar />
      <Messager />
      <Verse />
      <Leader />
      <Contact />
      <Footer />
    </section>
  );
}

export default Home;
