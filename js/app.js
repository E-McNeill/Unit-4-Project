/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //Temp Code
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//end of temp code
const game = new Game();
document.getElementById('btn__reset').addEventListener('click',function(){
game.startGame();
});

const button = document.querySelectorAll('.key');
for (let i=0; i < button.length; i++ ){
    button[i].addEventListener('click', function(){
        game.handleInteraction(button[i]);
        
     })
};

document.addEventListener('keydown',  function (e){
    for (let i=0; i< button.length; i++){
        if (e.key == button[i].textContent){
            game.handleInteraction(button[i]);
        }
    }                
    });











