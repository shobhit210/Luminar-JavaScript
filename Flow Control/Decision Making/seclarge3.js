var a=50;
var b=100;
var c=15;

console.log(`the numbers are ${a}, ${b} and ${c}`);

if ((a>b && a<c)||(a<b && a>c)) {
    console.log(`second largest number is ${a}`);
} else if ((b>c && b<a)||(b<c && b>a)) {
    console.log(`second largest number is ${b}`);
} else if ((c>a && c<b)||(c<a && c>b)) {
    console.log(`second largest number is ${c}`);
}