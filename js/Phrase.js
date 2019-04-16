/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

/*Display phrase on the game board*/
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

/*Checks if the selected key is found in the chosen phrase*/
checkLetter(letter){
if (this.phrase.includes(letter)){
    return true;
} else {
    return false;
}
};

/*Shows the letter onscreen if it is a match*/
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
