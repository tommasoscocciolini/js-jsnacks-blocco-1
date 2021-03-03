var num1 = parseInt(prompt("Inserisci il primo numero"));

var num2 = parseInt(prompt("Inserisci il secondo numero"));

if (num1>num2) {
  document.getElementById('risultato').innerHTML = num1 + " è il più grande.";
} else if (num2>num1) {
  document.getElementById('risultato').innerHTML = num2 + " è il più grande.";
} else {
  document.getElementById('risultato').innerHTML = +num1 + " e " + num2 + " sono uguali";
}
