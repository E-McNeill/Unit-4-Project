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
}