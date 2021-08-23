//Factorial of a given number

var num = 8;
var fact = 1;
for (let i = num; i > 0; i--){
   fact = fact * i; //fact*=1;
   
}
console.log(`The factorial of given number is ${fact}`);