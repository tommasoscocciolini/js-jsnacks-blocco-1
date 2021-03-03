var invitati = ["Piero", "Joe", "Pippo", "Pluto"];
var who = prompt("Buonasera, inserisca il suo nome");

for (var i = 0; i < invitati.length; i++) {
  if (who==invitati[i]) {
    var pass = who;
  }
}
if (pass==who) {
  console.log("Signor "+ pass +", entri pure.");
  document.getElementById('result').innerHTML = "Signor "+ pass +", entri pure.";
} else{
  console.log("Signor "+ who +", lei non è invitato.");
  document.getElementById('result').innerHTML = "Signor "+ who +", lei non è invitato.";
}
