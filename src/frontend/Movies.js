import React, { useState, useEffect } from 'react';
import Allmovies from './Allmovies';
// import getMovies from './GetMovies';

export default function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect (()=> {
    fetch('/rest/movies')
    .then(response => response.json())
    .then(setMovies(movies))
  }, [movies])

  return (
    <div>
      <header>
        <h1>WELCOME TO KODFLIX</h1>
      </header>
      <div className='container'>
        {
          movies.map((movie) => (
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