import React from 'react';
export default function Allmovies(props) {
    return (
      <div className='movie'>
        <img src={props.image} alt={`${props.name} cover`} />
        <div className='overlay'>
          <h3>{props.name}</h3>
        </div>
      </div>);
  }