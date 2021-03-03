var n = parseInt(prompt("inserisci N:"));
var cubi = [];
for (var i = 0; i < n; i++) {
  cubi[i] = i*i*i;
}

console.log(cubi);
document.getElementById('n').innerHTML = "N= "+ n;
document.getElementById('cubi').innerHTML = cubi;
