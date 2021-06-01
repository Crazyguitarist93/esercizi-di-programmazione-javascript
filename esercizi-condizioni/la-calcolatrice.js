/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

let numero1 = prompt('Inserisci numero 1');
let numero2 = prompt('Inserisci numero2');
let operazione = prompt('inserisci l\'operazione da eseguire');


function somma (numero1, numero2) {
  return numero1 + numero2
}


function moltiplicazione (numero1, numero2) {
  return numero1 * numero2
}


function divisione (numero1, numero2) {
  return numero1 / numero2
}

function modulo (numero1, numero2) {
  return numero1 % numero2
}

function pow (numero1, numero2) {
  return Math.pow(numero1, numero2);
}

function media (numero1, numero2) {
  return (numero1 + numero2) / 2;
}

switch(operazione) {
  case 1:
    operazione == somma 
    somma(numero1, numero2)
    console.log("
    break;
 
    
    

