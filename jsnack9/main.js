var nums = [0,1,2,3,4,5,6,7,8,9];
sum=0;
media=0;
for (var i = 0; i < nums.length; i++) {
  sum+=nums[i];
  media+=nums[i];
}
media/=10;
document.getElementById('nums').innerHTML = "Numeri "+ nums;
document.getElementById('sum').innerHTML = "Somma dei numeri: " + sum;
document.getElementById('media').innerHTML = "Media dei numeri: " + media;
