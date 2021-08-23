var expenses=[30000, 25000, 27000, 25000, 25000, 25000]
// for(let val of expenses){
//     console.log(val);
// }


//Total Exp
// var sum = 0;
// for(let exp of expenses){
// sum+=exp
// }
// console.log(sum);


// Print all expenses greater than 25000
// for(let amount of expenses){
//     if (amount>25000) {
//         console.log(amount);
//     }
// }

//Count of months having greater than 25000
// var months=0;
// for (let amt of expenses){
//     if(amt>25000)
//     months++;
// }
// console.log(months);


// highest expense
var maxexp=0;
for (let exp of expenses){
    if (exp>maxexp) {
        maxexp=exp;
    }
}
console.log(`highest exp is ${maxexp}`);


//HW 