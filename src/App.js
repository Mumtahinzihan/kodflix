import React from 'react';
import './App.css';
import joker from './images/jokerMovieCover.png';

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO KODFLIX</h1>
      <div className='movies-of-the-year'>
        <div className='horror-movie container'>
          <div className='movie'><h3>Joker</h3> <img src={joker} alt="jokes"/></div>
          <div className='movie'><h3>Terminator: Dark Fate</h3></div>
          <div className='movie'><h3>It: Chapter Two</h3></div>
        </div>
        <div className='action-movie container'>
          <div className='movie'><h3>The Addams Family</h3></div>
          <div className='movie'><h3>The Mask</h3></div>
          <div className='movie'><h3>Annabelle Comes Home</h3></div>
        </div>
      </div>
    </div>
  );
}

export default App;
