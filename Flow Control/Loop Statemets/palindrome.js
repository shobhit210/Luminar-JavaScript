// Check if number is palindrome

var num=1421;
var num1=num;
var result="";
while (num!=0) {
    let carry=num%10;
    result += carry;
    num=Math.floor(num/10);
}
console.log(result);
// if (num1==result) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a palindrome");
// }
console.log(num1==result?"Palindrome":"Not a palindrome");