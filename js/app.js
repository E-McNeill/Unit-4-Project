/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /*Begins a new game when the start button is clicked*/
const game = new Game();
document.getElementById('btn__reset').addEventListener('click',function(){
game.startGame();
});

/*Event listener for each on screen key. Selected key passed to interaction handler*/
const button = document.querySelectorAll('.key');
for (let i=0; i < button.length; i++ ){
    button[i].addEventListener('click', function(){
        game.handleInteraction(button[i]);
         })
};

/*Event listener for physcical keyboard keys. Selected key passed to interaction handler*/
document.addEventListener('keydown',  function (e){
for (let i=0; i< button.length; i++){
    if (e.key == button[i].textContent){
        if (button[i].disabled == false) {
            game.handleInteraction(button[i]);
            }
        }
    }          
});

  











