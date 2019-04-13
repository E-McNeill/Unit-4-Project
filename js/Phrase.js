/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {
let chosenPhrase = this.phrase;
const eachPhrase = document.querySelector('#phrase > ul');
for (let i=0; i < chosenPhrase.length; i++){
    if (chosenPhrase[i] !== ' '){
        const listItem = document.createElement('li');
        listItem.classList.add('hide', 'letter', this.phrase[i]);
        eachPhrase.append(listItem);
        const letter = chosenPhrase[i];
        listItem.append(letter);
    } else {
        const listItem = document.createElement('li');
        listItem.classList.add('space');
        eachPhrase.append(listItem);
        const letter = chosenPhrase[i];
        listItem.append(letter);
    }
}
};
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter){
if (this.phrase.includes(letter)){
    this.showMatchedLetter(letter);
    const addChosen = document.querySelectorAll('.key');
    for (let i=0; i < addChosen.length; i++){
        if (addChosen[i].textContent == letter){
            addChosen[i].classList.add('chosen');
            }
            game.checkForWin();
        }
    //return true;
    } else {
       const addWrong = document.querySelectorAll('.key');
    for (let i=0; i < addWrong.length; i++){
        if (addWrong[i].textContent == letter){
            addWrong[i].classList.add('wrong');
            game.removeLife();
        }
    }
        //return false;
}
};
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    const av = document.querySelectorAll('#phrase >ul > li');
  for (let i=0; i < av.length; i++){
      if (av[i].classList.contains(letter)){
        av[i].classList.remove('hide');
        av[i].classList.add('show');
      }
  }
  
};
}
