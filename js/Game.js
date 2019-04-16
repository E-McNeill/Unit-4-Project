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
hideOverlay.classList.remove('lose');
hideOverlay.classList.remove('win');
document.getElementById('game-over-message').textContent ='';
const showPhrase = game.getRandomPhrase();
this.activePhrase = showPhrase;
showPhrase.addPhraseToDisplay();
this.missed = 0;


};
handleInteraction(button){
button.disabled = true;
this.activePhrase.checkLetter(button.textContent);
if (this.activePhrase.checkLetter(button.textContent) == true){
    this.activePhrase.showMatchedLetter(button.textContent);
    game.checkForWin();
    button.classList.add('chosen');
    if (game.checkForWin() == true){
        game.gameOver();
    }
} else if (this.activePhrase.checkLetter(button.textContent) == false){
    button.classList.add('wrong');
    game.removeLife();
}

  };
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin(){
const checkWin = document.getElementById('phrase').querySelectorAll('.hide');
if (checkWin.length < 1){
    return true;
     } 
};
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
const removeHeart = document.querySelectorAll('.tries img');
game.missed += 1;
for (let i=0; i < removeHeart.length; i++ ){
    if (removeHeart[i].classList.contains('dead') == false){
        removeHeart[i].classList.add('dead');
        removeHeart[i].setAttribute('src', 'images/lostHeart.png');
         break }        
}
    if (game.missed == 5 ){
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
document.addEventListener('keydown',  function (e){
    if (e.key == 'Enter'){
       game.startGame();
       }                
});
const removeHeart = document.querySelectorAll('.tries img');
for (let i=0; i < removeHeart.length; i++ ){
    if (removeHeart[i].classList.contains('dead')){
        removeHeart[i].classList.remove('dead');
        removeHeart[i].setAttribute('src', 'images/liveHeart.png');
        }        
}
const removeLi = document.querySelector('#phrase ul');
    while (removeLi.hasChildNodes()){
        removeLi.removeChild(removeLi.firstChild);
        }
const updateKeys = document.getElementsByClassName('key');
    for (let i=0; i < updateKeys.length; i++){
        updateKeys[i].classList.remove('chosen');
        updateKeys[i].classList.remove('wrong'); 
    }
   
const enableButtons = document.querySelectorAll('.key');
    for (let i=0; i < enableButtons.length; i++ ){
        enableButtons[i].disabled = false; 
    }
    if (game.missed == 5){
    document.getElementById('overlay').setAttribute('class', 'lose');
    document.getElementById('game-over-message').textContent ='Womp Womp......You Lose :(';
        
    } else {
        document.getElementById('overlay').setAttribute('class', 'win');
        document.getElementById('game-over-message').textContent ='YAY, You\'ve Won!' ;  
        };
}

};


