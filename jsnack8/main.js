var num = String(prompt("inserisci un numero di 4 cifre: "));
var arrayNum = [];
var sum=0;
for (var i = 0; i < 4; i++) {
  arrayNum[i]=num.charAt(i);
}
for (var i = 0; i < arrayNum.length; i++) {
  sum=sum+parseInt(arrayNum[i]);
}
document.getElementById('cifre').innerHTML = "Il numero in cifre è: "+ arrayNum;
document.getElementById('num').innerHTML = "Somma delle cifre: " + sum;
