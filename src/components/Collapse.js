import React, { useState } from "react";
import arrow from "../assets/arrow.png";


const Collapse = ({title, content}) => {

  const [open, setOpen] = useState(false);

  const arrowClick = () => {
    setOpen(!open)
  }

  return (
    <div className="collapse_content">
        <h2 className="collapse_title">{title}</h2>

        <div className={open ? "collapse_div_show" : "collapse_div_hidden"}>{content}</div>

        <img src={arrow} alt="icône flêche" className={open ? "collapse_arrow_down" : "collapse_arrow_up"} onClick={arrowClick}/>
    </div>
  );
};

export default Collapse;