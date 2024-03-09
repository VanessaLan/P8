import React from "react";

const Card = ({title, cover}) => {
  return (
    <article className="card_home">
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </article>
  );
};
export default Card;
