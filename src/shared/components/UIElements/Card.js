import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children} 
      {/* This will apply whatever comes inside Card element */}
    </div>
  );
};

export default Card;
