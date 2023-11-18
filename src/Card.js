import React from "react";
import robots from './robots.js';

const Card = (props) => {
    return (
        <div className="bg-light-green tc dib br3 ma2 pa2 grow bw2 shadow- 5">
            <img alt="card" src={`https://robohash.org/${props.id}`} /> 
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card; 