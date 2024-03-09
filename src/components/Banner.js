import React from 'react';

const Banner = ({image, texte}) => {
    return (
        <div className="banner">
            <img src={image} alt="bannière"/>
            <div className="banner_text">{texte}</div>
        </div>
    );
};

export default Banner;