import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <nav className="navigation">
        <ul>
          <NavLink to={"/"} className="nav_li"><li>Accueil</li></NavLink>
          <NavLink to={"/about"} className="nav_li"><li>A Propos</li></NavLink>
        </ul>
      </nav>
  );
};

export default Navigation;
