/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/



let menu = [
  'Tiramisù',
  'Torta Della Nonna',
  'Cheesecake alla Nutella',
  'Macedonia'
];

var input = prompt("Inserisci un numero")

if (input == 1) {
  alert("E' il momento di preparare un " + menu[0]);
  } else if (input == 2) { 
    alert("E' il momento di preparare un " + menu[1]);
  } else if (input == 3) {
    alert("E' il momento di preparare una " + menu[2]);
  } else if (input == 4) { 
    alert("E' il momento di preparare una " + menu[3]);
  } else 
    alert('Dolce non disponibile');

               
