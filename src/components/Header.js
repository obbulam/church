import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
import LEADERS from "../components/Leader";
import EGLISE from "../components/Eglise";
import MESSAGER from "../components/Messager";
import DONNER from "../components/NotFound";
import HOMME from "../pages/Home";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "LEADERS", path: "/Leader" },
    { name: "EGLISE", path: "/Eglise" },
    { name: "MESSAGER", path: "/Messager" },
    { name: "DONNER", path: "/Donner" },
    { name: "HOMME", path: "/" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <img src="./log.jpeg" alt="logo" className="logo" />

        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
