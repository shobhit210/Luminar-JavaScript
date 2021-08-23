// while loop

// var i = 10;
// while (i>=1) {
//     console.log(i);
//     i--;
// }


// Printing odd numbers from 1 to 50
// var n = 1;
// while (n<=50) {
//     if (n%2!=0) {
//         console.log(n);
//     }
//     n++;
// }


// sum of numbers between 1 to 10
// var k = 1;
// var sum = 0;
// while (k<=10) {
    
//     sum+=i;
//     k++;
// }
// console.log(`sum of numbers between 1 to 10 is ${sum}`);


// Reversing a number
// var num=123;
// var res="";
// while (num!=0) {
//     let digit=num%10;
//     res+=digit;
//     num=Math.floor(num/10);
// }
// console.log(res);


// Check if number is palindrome
var num=121;
var num1=num;
var res="";

while (num!=0) {
    let digit=num%10;
    res+=digit;
    num=Math.floor(num/10);
}

if (res==num1) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}