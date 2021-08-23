var expenses=[30000, 25000, 27000, 25000, 25000, 25000]
var sum = 0;
for(let exp of expenses){
    sum += exp;
}
console.log(`Sum of array expenses is ${sum}`);