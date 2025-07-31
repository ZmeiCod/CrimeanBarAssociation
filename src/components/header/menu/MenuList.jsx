import React from "react";
import "./../../../css/components/header/menu/MenuList.css";

export default function MenuList() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "mission", label: "Misja" },
    { id: "expertise", label: "Услуги" },
    { id: "about", label: "О нас" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <ul className="menuSection">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            className="menuBtn"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
