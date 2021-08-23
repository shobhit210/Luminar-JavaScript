//sum of odd nos between 10 to 50

var i=10;
var sum=0;
while (i<=50) {
    if (i%2!=0) {
        sum += i;
    }
    i++;
}
console.log(`Sum of the numbers is ${sum}`);