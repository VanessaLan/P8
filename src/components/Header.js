import React from "react";
import logo from "../assets/logo.png";
import Navigation from "./Navigation";

const Header = () => {

  return (
    <div className="header">
      <img src={logo} alt="Logo de Kasa" />
      <Navigation/>
    </div>
  );
};

export default Header;
