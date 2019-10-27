import React from 'react';

const Card = (props) => {
    return <div>
    <h2>{props.name}</h2>
    <img src={props.image} alt="Player Headshot"/>
    <p>{props.number}</p>
    <p>{props.position}</p>
    </div>
}

export default Card;