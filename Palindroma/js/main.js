'use strict';

/******** 
   * Funzioni
   *
   *  ***** */

// funzione controlla lettere per lettera dalla fine della parola
function showPalindroma(parola) {
    let palindroma = ''
    for (let i = parola.length - 1; i >= 0; i--) {
      palindroma += parola[i]
    }
    return palindroma
  }

  /******** 
   * MAIN
   *
   *  ***** */

  const userInput = prompt("Inserisci una parola");

  // condizione per vedere se la parola inserita è palindroma
  if (userInput === showPalindroma(userInput)) {
    console.log(showPalindroma(userInput));
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }

