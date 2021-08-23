// sum of cube of digits

var num = 123;
var sum = 0;
while (num!=0) {
    let temp=num%10;
    sum += temp**3;
    num=Math.floor(num/10)
}

console.log(`Sum of cubes of the digit is ${sum}`);