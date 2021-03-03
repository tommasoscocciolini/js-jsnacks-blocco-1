var prima = String(prompt("inserisci prima parola")).trim();
var seconda = String(prompt("inserisci seconda parola")).trim();
console.log(prima, seconda);

if (prima.length > seconda.length) {
  document.getElementById('risultato').innerHTML = prima + " con lunghezza "+ prima.length;
} else if (prima.length < seconda.length) {
  document.getElementById('risultato').innerHTML = seconda + " con lunghezza "+ seconda.length;
} else {
  document.getElementById('risultato').innerHTML = "Le parole sono entrambe lunghe "+ seconda.length;
}
