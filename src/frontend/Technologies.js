import React, { useState, useEffect } from 'react';
import Allmovies from './Allmovies';

export default function Technologies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/rest/movies')
      .then(response => response.json())
      .then(movies => setMovies(movies));
  }, []);

  if (movies) {
    return (
      <div>
        <header>
          <h1>WELCOME TO KODFLIX</h1>
        </header>
        <div className='container'>
          {
            movies.map(movie => (
              <Allmovies
                key={movie.id}
                id={movie.id}
                name={movie.name.toUpperCase()}
              />
            ))
          }
        </div>
      </div>
    )
  }
}