var num1 = 15;
var num2 = 30;
var i = 1;
var gcd = 0;

while (i <= num1 && i <= num2) {
    if (num1 % i == 0) {
        if (num2 % i == 0) {
            gcd = i;
        }
    }
    i++;
}

console.log(`GCD of the numbers is ${gcd}`);