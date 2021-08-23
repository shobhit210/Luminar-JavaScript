// sum of numbers between 1 to 10

var num=1;
var sum=0;

while (num<=10) {
    // sum=num+sum;
    sum+=num;
    num++;
}

console.log(`Sum of numbers between 1 to 10 is ${sum}`);