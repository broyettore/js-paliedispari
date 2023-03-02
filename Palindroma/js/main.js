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

    if(parola === palindroma) {
      return true
    }
    return false
  }

  /******** 
   * MAIN
   *
   *  ***** */


