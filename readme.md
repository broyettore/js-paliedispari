# JS PALIEDISPARI

Palidroma

Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## Problem-Solving (Pari Dispari)

### Step 1 : Scrivo le mie funzioni

* Creo una funzione1 al fine di generare un numero random da 1 a 5
* Creo una funzione2 con due argomenti ovvero il valore delle giocate del giocatore e del computer.
* All'interno della funzione due creo una variabile per fare la somma delle due giocate.
* SE il risultato è pari, vince chi ja scelto pari altrimenti vince l'altro.

### Step 2 : Le variabili

* Creo una variabile per il computer a cui assegno la funzione1.
* Creo una variabile booleana a cui assegno il valore di false, ci servirà dopo.
* Creo una variabile per il giocatore vuota, ci servirà poi.

### Step 3 : Le condizoni

* Creo un ciclo infinito con la domanda Pari o Dispari.
* Se la risposta del giocatore corrsiponde a pari o dispari, allora la variabile booleana diventerà true e il ciclo si fermerà.
* Fuori dal ciclo, imposto una condzione per cui se la variabile booleana è vera il giocatore dovrà inserire un numero da 1 a 5 e seguirà il risultato grazie alla funzione2.
* ALTRIMENTI se il giocatore non inserisce un numero(Nan) o non inserisce un numero vaildo (num < 1 o num > 5), il computer vincerà di default.

## Problem-Solving Parola Palindroma

### Step 1 : La Funzione

* Creo una funzione1 il cui argomento sarà la parola da verificare.
* Al suo intenro creo una varibile1 con una stringa vuota che sarà ll risultato.
* Creo un ciclo che partirà dalla fine della lunghezza stringa e avrà una durata >= a 0.
* Ad ogni ciclo verrà tolta una lettera dalla parola che verrà aggiunta/concatenata nella variabile1.
* la funzione avrà come risultato finale la variabile1.

### Step 2 : La Condizione

* Creo un prompt per chiedere all'utente di inserire una parola.
* SE la parola inserita é uguale alla parola dopo la verifica della funzione allor la parola è palindroma altrimenti non.
