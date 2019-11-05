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
      <header>
        <h1>WELCOME TO KODFLIX</h1>
      </header>
      <div className='container'>
        <Allmovies id='joker' name='Joker(2019)' image={joker} />
        <Allmovies id='terminator' name='Terminator: The Dark Fate' image={terminator} />
        <Allmovies id='it' name='It: Chapter Two' image={itChapter} />
      </div>
      <div className='container'>
        <Allmovies id='the-addams-family' name='The Addams Family' image={addamsFamily} />
        <Allmovies id='the-mask' name='The Mask' image={mask} />
        <Allmovies id='annabelle' name='Annabelle Comes Home' image={anabelle} />
      </div>
    </div>
  )
}
