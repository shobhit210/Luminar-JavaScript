// Reversing a number

var num=6587;
var res="";
while (num!=0) {
    let cat=num%10;
    res+=cat;
    num=Math.floor(num/10);
}
console.log(res);