/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/



var AnnoCor = 2021;
var AnnoNasc = 1993;

var eta = (AnnoCor-AnnoNasc);
var etaManc = (100 - eta);

alert('La persona ha ' + eta + ' anni ' + ' gliene mancano ' + etaManc + ' per arrivare a 100.');
