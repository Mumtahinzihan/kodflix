import joker from './images/jokerMovieCover.png';
import anabelle from './images/annabelleMovieCover.jpg';
import itChapter from './images/itMovieCover.jpg';
import terminator from './images/terminatorMovieCover.jpg';
import mask from './images/the-mask.jpg';
import addamsFamily from './images/addams-family-1.jpg';

export default function getTechnologies() {
    return [
        { id: 'joker', name: 'Joker(2019)', image: joker },
        { id: 'terminator', name: 'Terminator: The Dark Fate', image: terminator },
        { id: 'it', name: 'It: Chapter Two', image: itChapter },
        { id: 'the-addams-family', name: 'The Addams Family', image: addamsFamily },
        { id: 'the-mask', name: 'The Mask', image: mask },
        { id: 'annabelle', name: 'Annabelle Comes Home', image: anabelle },
    ]
}