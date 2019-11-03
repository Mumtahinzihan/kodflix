import React from 'react';
import './App.css';
import joker from './images/jokerMovieCover.png';
import anabelle from './images/annabelleMovieCover.jpg';
import itChapter from './images/itMovieCover.jpg';
import terminator from './images/terminatorMovieCover.jpg';
import mask from './images/the-mask.jpg';
import addamsFamily from './images/addams-family-1.jpg';


function App() {
  return (
    <div className="App">
      <h1>WELCOME TO KODFLIX</h1>
      <div className='container'>
        <div className='movie'>
          <img src={joker} alt="joker" />
          <div>
            <h3>Joker</h3>
          </div>
        </div>
        <div className='movie'>
          <img src={terminator} alt="terminatorMovieCover" />
          <div>
            <h3>Terminator: Dark Fate</h3>
          </div>
        </div>
        <div className='movie'>
          <img src={itChapter} alt="it movie cover" />
          <div>
            <h3>It: Chapter Two</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='movie'>
          <img src={addamsFamily} alt="addams Family movie" />
          <div>
            <h3>The Addams Family</h3>
          </div>
        </div>
        <div className='movie'>
          <img src={mask} alt="mask movie" />
          <div>
            <h3>The Mask</h3>
          </div>
        </div>
        <div className='movie'>
          <img src={anabelle} alt="anabelle Movie cover" />
          <div>
            <h3>Annabelle Comes Home</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
