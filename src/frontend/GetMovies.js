import joker from './images/joker-MovieCover.png';
import anabelle from './images/annabelle-MovieCover.jpg';
import it from './images/it-MovieCover.jpg';
import terminator from './images/terminator-MovieCover.jpg';
import mask from './images/themask-MovieCover.jpg';
import theAddamsFamily from './images/addamsfamily-MovieCover.jpg';

export default function getMovies() {
    return [
        { id: 'joker', name: 'JOKER(2019)', image: joker, synopsis: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he\'s part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.'},
        { id: 'terminator', name: 'TERMINATOR: The Dark Fate', image: terminator, synopsis: `In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator.` },
        { id: 'it', name: 'It: Chapter Two', image: it, synopsis: `Defeated by members of the Losers' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.`},
        { id: 'the-addams-family', name: 'The Addams Family', image: theAddamsFamily, synopsis: `The eccentrically macabre family moves to a bland suburb where Wednesday Addams' friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.`},
        { id: 'the-mask', name: 'The Mask', image: mask, synopsis: `When timid bank clerk Stanley Ipkiss (Jim Carrey) discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle (Cameron Diaz). Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell (Peter Greene), whose goons get blamed for the heist.` },
        { id: 'annabelle', name: 'Annabelle Comes Home', image: anabelle, synopsis: 'John Form (Ward Horton) thinks he\'s found the perfect gift for his expectant wife, Mia (Annabelle Wallis) : a vintage doll in a beautiful white dress. However, the couple\'s delight doesn\'t last long: One terrible night, devil worshippers invade their home and launch a violent attack against the couple. When the cultists try to summon a demon, they smear a bloody rune on the nursery wall and drip blood on Mia\'s doll, thereby turning the former object of beauty into a conduit for ultimate evil.' },
    ]
}