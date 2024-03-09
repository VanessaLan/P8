import React from "react";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";
import Card from "../components/Card"

const Gallery = () => {
  return (
    <div className="gallery_home">
        <div className="card_container">
            {data.map(({ id, title, cover }) => (
                <NavLink to={`/logement/${id}`} key={id}>
                    <Card title={title}
                          cover={cover}/>
                </NavLink>
            ))}
        </div>
    </div>
  );
};

export default Gallery;
