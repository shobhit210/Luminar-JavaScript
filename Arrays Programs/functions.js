// Cube of a number

// function cube(num1){
//  let res = num1**3; //or just return num1**3 No need of res variable.
//  return res;
// }
// console.log(cube(8));




// Any number of arguments

// function add(...args) {
//     let total=0;
//     for(let num of args){
//         total += num;
//     }
//     return total;
// }

// console.log(add(10,20,30));





// Any number of arguments sum

// function add(...num){
//     var sum = 0;
//     for (let elem of num){
//         sum += elem;
//     }
//     return sum;
// }

// console.log(add (4,5,6));





// Any number of arguments multiplication

function mult(...arr) {
    var prod = 1;
    for(let num of arr){
        prod *= num;
    }
    return prod;
}

console.log(mult(5,10));