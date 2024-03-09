import React from 'react';
import full_star from "../assets/full_star.png"
import empty_star from "../assets/empty_star.png"

const Rating = ({rating}) => {
    return (
        <div className="rating">
            <img src={rating >=1 ? full_star : empty_star} alt="star" className="star"/>
            <img src={rating >=2 ? full_star : empty_star} alt="star" className="star"/>
            <img src={rating >=3 ? full_star : empty_star} alt="star" className="star"/>
            <img src={rating >=4 ? full_star : empty_star} alt="star" className="star"/>
            <img src={rating >=5 ? full_star : empty_star} alt="star" className="star"/>
        </div>
    );
};

export default Rating;