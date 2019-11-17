import React from 'react';
import Allmovies from './Allmovies';
import getTechnologies from './technologies-get';

export default function Technologies() {
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
              name={allMovies.name}
              image={allMovies.image} />
          ))
        }
      </div>
    </div>
  )
}