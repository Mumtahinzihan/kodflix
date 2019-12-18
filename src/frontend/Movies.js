import React from 'react';
import Allmovies from './Allmovies';
import getMovies from './GetMovies';

export default function Movies() {
  return (
    <div>
      <header>
        <h1>WELCOME TO KODFLIX</h1>
      </header>
      <div className='container'>
        {
          getMovies().map((movie) => (
            <Allmovies
              key={movie.id}
              id={movie.id}
              name={movie.name.toUpperCase()}
              image={movie.image} />
          ))
        }
      </div>
    </div>
  )
}