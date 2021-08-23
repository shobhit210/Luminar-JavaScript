var num1 = 15;
var num2 = 40;
var gcd = 0;

for (let i = 1; i < num1; i++) {
    
    if (num1%i==0 && num2%i==0) {
        gcd = i;
    }
}
console.log(`GCD of the two numbers is ${gcd}`);