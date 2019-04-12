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
const showPhrase = game.getRandomPhrase();
this.activePhrase = showPhrase;
showPhrase.addPhraseToDisplay();

};
handleInteraction(){

};
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin(){
//const scan = document.querySelectorAll('#phrase >ul > li');
const scanTest = document.getElementById('phrase').querySelectorAll('.hide');
if (scanTest.length > 0){
    return false;
    } else {
        return true;
    }
};
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
document.querySelector('tries').setAttribute('src', 'images/lostHeart.png');
this.missed += 1;
if (this.missed = 5){
    game.gameOver();
}    
};
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
const showOverlay = document.getElementById('overlay');
showOverlay.style.display = 'block';
if (this.missed = 5){
    document.getElementById('#overlay').setAttribute('class', 'lose');
    document.getElementById('#game-over-message').textContent('You Lose :(');
} else {
    document.getElementById('#overlay').setAttribute('class', 'win');
    document.getElementById('#game-over-message').textContent('You Won!');
}
};
}
