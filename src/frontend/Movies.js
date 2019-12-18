import React, { useState, useEffect } from 'react';
import Allmovies from './Allmovies';

export default function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect (()=> {
    fetch('/rest/movies')
    .then(response => response.json())
    .then(movies => setMovies(movies))
  }, [movies])

  return (
    <div>
      <header>
        <h1>WELCOME TO KODFLIX</h1>
      </header>
      <div className='container'>
        {
          movies.map((movie) => (
          <div key={movie.id}>
            <h1>where are you?</h1>
            <Allmovies
              id={movie.id}
              name={movie.name.toUpperCase()} 
            />
          </div>
          ))
        }
      </div>
    </div>
  )
}