/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

/*List of phrases to be used in the game*/
createPhrases() {
    const phrases = [new Phrase ('Fortune favors the bold'),
                    new Phrase ('The early bird catches the worm'),
                    new Phrase ('There is no time like the present'),
                    new Phrase ('A watched pot never boils'),
                    new Phrase ('Birds of a feather flock together')];
           return phrases;
}     

/*Selects a random phrase from the array of phrases*/
getRandomPhrase() {
    const randomPhrases = Math.floor(Math.random()* this.phrases.length);
    const randomPhrase = this.phrases[randomPhrases];
    return randomPhrase;
    };

/* Begins game by selecting a random phrase and displaying it to user*/
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

/*Accepts the selected key, disables it and checks if it was a match*/
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

  /*Checks if the player has won*/
checkForWin(){
const checkWin = document.getElementById('phrase').querySelectorAll('.hide');
if (checkWin.length < 1){
    return true;
     } 
};

/*Increases missed property by one for each incorrect guess*/
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

/*Shows a different 'game over message' depending if the player wins or loses*/
gameOver(gameWon) {
const showOverlay = document.getElementById('overlay');
showOverlay.style.display = 'block';
const removeHeart = document.querySelectorAll('.tries img'); //on game over, hearts reset to live
for (let i=0; i < removeHeart.length; i++ ){
    if (removeHeart[i].classList.contains('dead')){
        removeHeart[i].classList.remove('dead');
        removeHeart[i].setAttribute('src', 'images/liveHeart.png');
        }        
}
const removeLi = document.querySelector('#phrase ul'); // phrase list reset
    while (removeLi.hasChildNodes()){
        removeLi.removeChild(removeLi.firstChild);
        }
const updateKeys = document.getElementsByClassName('key'); //key classes updated
    for (let i=0; i < updateKeys.length; i++){
        updateKeys[i].classList.remove('chosen');
        updateKeys[i].classList.remove('wrong'); 
    }
const enableButtons = document.querySelectorAll('.key'); //disable removed from keys
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


