import React from 'react';
import Allmovies from './Allmovies';
import getTechnologies from './Movies-get';

export default function Movies() {
  return (
    <div>
      <header>
        <h1>WELCOME TO KODFLIX</h1>
      </header>
      <div className='container'>
        {
          getTechnologies().map((allMovies) => (
            <Allmovies
              key={allMovies.id}
              id={allMovies.id}
              name={allMovies.name.toUpperCase()}
              image={allMovies.image} />
          ))
        }
      </div>
    </div>
  )
}