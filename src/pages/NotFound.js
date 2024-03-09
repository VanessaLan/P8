import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content_not_found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link to={"/"} className="lien_accueil"><p>Retourner sur la page d'accueil</p></Link>
    </div>
  );
};

export default NotFound;
