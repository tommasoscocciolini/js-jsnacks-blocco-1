var somma = [];
var totale = 0;
for (var i = 0; i < 10; i++) {
  somma[i]= parseInt(prompt("Inserisci il "+ (i + 1) +"o numero"));
  totale+=somma[i];
}
console.log(somma);
console.log(totale);
document.getElementById('somma').innerHTML = "numeri inseriti: " + somma;
document.getElementById('tot').innerHTML = "Totale: "+ totale;
