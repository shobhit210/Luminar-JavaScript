var num=11;
var flag=0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag++;
    }
    
}
console.log(flag==0?"Prime Number":"Not a prime number");