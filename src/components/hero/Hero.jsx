import { useState } from "react";
import Header from "../header/Header.jsx";
import "./../../css/sections/homepage/hero/Hero.css";

export default function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <Header showMenu={showMenu} onToggleMenu={toggleMenu} />
    </section>
  );
}
