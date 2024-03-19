import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import NotFound from "./NotFound";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = data.find((element) => element.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="fiche_logement">
      <Carrousel pictures={logement.pictures} />

      <div className="logement_info">
        <div>
          <h2 className="logement_title">{logement.title}</h2>
          <p className="logement_location">{logement.location}</p>

          <div className="logement_tag">
            {logement.tags.map((tags, index) =>
            <Tag tags={tags}
                  key={index} /> )}
           </div>

        </div>

        <div className="logement_host_rating">
          <div className="logement_host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={"photo de " + logement.host.name} />
          </div>

          <Rating rating={logement.rating}/>
        </div>
      </div>

      <div className="logement_collapse">
        <Collapse title={"Description"} content={logement.description} />
        <Collapse title={"Equipements"} content={logement.equipments.map((equipments, index) =>
          <ul key={index}>
            <li>{equipments}</li>
          </ul> )} />
      </div>
    </div>
  );
};

export default FicheLogement;