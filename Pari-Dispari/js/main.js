'use strict';

/**********
 * Funzioni
 *
 *********/

// funzione genera numero random da 1 a 5
function randomInterval() { 
    return Math.floor(Math.random() * (5 - 1 + 1) + 1)
  }

// funzione per stabilire il vincitore in base a pari o dispari
function showWinner(player, computer) {
    let sum = player + computer;

    if (sum % 2 === 0) {
        return `Pari ha vinto con ${sum}`;
    } 

    return `Dispari ha vinto con ${sum}`;
}

/************* 
 * MAIN
 ************/

const computerHand = randomInterval();
let boolean = false;
let playerHand = "";

// ciclo infinito se la risposta non corrisponde a quelle stabbilite
for (let i = 0; i < Infinity; i++) {
    let choice = prompt("pari o dispari");

    if (choice === "pari" || choice === "dispari") {
        boolean = true;
        break;
    } else if (choice === "Pari" || choice === "Dispari") {
        boolean = true;
        break;
    } 
}

// Se la var booleana è vera, il giocatore mette un num e la funzione parte
if (boolean = true) {
    playerHand = Number(prompt("Inserisci un numero da 1 a 5"));
    alert(showWinner(playerHand, computerHand));
}

// se il giocatore non inserisce un num vaildo il pc vince di default
if (isNaN(playerHand)) {
    alert("Non hai inserito un numero, il computer vince")
};

console.log(playerHand);
console.log(computerHand);
