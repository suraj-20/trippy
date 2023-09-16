import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./NavbarMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="navbar">
      <h1 className="nav-logo">Trippy</h1>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu flex"} >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button className="nav-Btn">SignUp</button>
      </ul>
    </section>
  );
};

export default Navbar;
