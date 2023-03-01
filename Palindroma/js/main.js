'use strict';

function showPalindroma(parola) {
    let palindroma = ''
    for (let i = parola.length - 1; i >= 0; i--) {
      palindroma += parola[i]
    }
    return palindroma
  }
  
  const userInput = prompt("Inserisci una parola");

  if (userInput === showPalindroma(userInput)) {
    console.log(showPalindroma(userInput));
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }

