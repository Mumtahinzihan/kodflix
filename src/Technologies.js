import React from 'react';
import Allmovies from './Allmovies';
import joker from './images/jokerMovieCover.png';
import anabelle from './images/annabelleMovieCover.jpg';
import itChapter from './images/itMovieCover.jpg';
import terminator from './images/terminatorMovieCover.jpg';
import mask from './images/the-mask.jpg';
import addamsFamily from './images/addams-family-1.jpg';
export default function Technologies() {
    return (
      <div>
        <div className='container'>
          <Allmovies name='Joker(2019)' image={joker} />
          <Allmovies name='Terminator: The Dark Fate' image={terminator} />
          <Allmovies name='It: Chapter Two' image={itChapter} />
        </div>
        <div className='container'>
          <Allmovies name='The Addams Family' image={addamsFamily} />
          <Allmovies name='The Mask' image={mask} />
          <Allmovies name='Annabelle Comes Home' image={anabelle} />
        </div>
      </div>
    )
  }
  