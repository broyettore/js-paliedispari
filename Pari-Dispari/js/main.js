'use strict';

/**********
 * Funzioni
 *
 *********/

function randomInterval() { 
    return Math.floor(Math.random() * (5 - 1 + 1) + 1)
  }
  
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

for (let i = 0; i < Infinity; i++) {
    let choice = prompt("pari o dispari");

    if (choice === "pari" || choice === "dispari") {
        boolean = true;
        break;
    } else if (choice === "Pari" || choice === "Dispari") {
        boolean = true;
        break;
    } else {
    }
}

if (boolean = true) {
    playerHand = Number(prompt("Inserisci un numero da 1 a 5"));
    alert(showWinner(playerHand, computerHand));
}

if (isNaN(playerHand)) {
    alert("Non hai inserito un numero, il computer vince")
};

console.log(playerHand);
console.log(computerHand);
