var numeri = [];

for (var i = 0; i < 6; i++) {
 var num = parseInt(prompt("inserisci " + (i+1) + "o numero"));
 if (num%2!=0) {
   numeri[i] = num;
 }
}
console.log(numeri);
