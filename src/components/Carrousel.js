import React, { useState } from "react";
import arrow_left from "../assets/arrow_left.png";
import arrow_right from "../assets/arrow_right.png";

const Carrousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="carousel">
      <img src={arrow_left} alt="flèche gauche" className="arrow_left" onClick={prevSlide} />

      <img src={pictures[currentSlide]} alt="slide du carrousel" />

      <img src={arrow_right} alt="flèche droite" className="arrow_right" onClick={nextSlide} />

      <span className="current_number">{currentSlide + 1}/{pictures.length}</span>
    </div>
  );
};

export default Carrousel;
