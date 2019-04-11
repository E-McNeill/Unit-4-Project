/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phrases = [new Phrase ('Fortune favors the bold'),
                    new Phrase ('The early bird catches the worm'),
                    new Phrase ('There is no time like the present'),
                    new Phrase ('A watched pot never boils'),
                    new Phrase ('Birds of a feather flock together')];
           return phrases;
}     
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const randomPhrases = Math.floor(Math.random()* this.phrases.length);
    const randomPhrase = this.phrases[randomPhrases];
    return randomPhrase;
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
const hideOverlay = document.getElementById('overlay');
hideOverlay.style.display = 'none';    
//game.getRandomPhrase().addPhraseToDisplay();
const showPhrase = game.getRandomPhrase();
this.activePhrase = showPhrase;
showPhrase.addPhraseToDisplay();


};
}
 