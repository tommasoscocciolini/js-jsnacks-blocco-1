var num= [2];
console.log(num);
for (var i = 0; i < 9; i++) {
  document.getElementById('potenze').innerHTML = num;
  num[i+1]=num[i]*2;
}
