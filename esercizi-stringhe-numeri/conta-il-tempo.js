/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var input = prompt("Inserisci i secondi ");



var def = Math.floor(input/60);
var defNoRound = (input/60);


var ore = Math.floor(def/60);

var ok = Math.floor(ore*60);

var minuti = def - ok;

var secondiNoRound = defNoRound - def;
var secondi = Math.floor(secondiNoRound * 60);


alert('sono ' + ore + ' ore ' + minuti + ' minuti e ' + secondi + ' secondi');
