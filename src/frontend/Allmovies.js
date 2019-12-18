import React from 'react';
import { Link } from 'react-router-dom';
export default function Allmovies(props) {
    return (<>
      <h1>Image goes here</h1>

      <Link to={`/${props.id}`} className='movie'>
        <img src={require(`./images/${props.id}-MovieCover.jpg`)} alt={`${props.name} cover`} />
        <div className='overlay'>
          <h3>{props.name}</h3>
        </div>
      </Link>
      </>);
  }