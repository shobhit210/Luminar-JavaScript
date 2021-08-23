// var arr = [1,5,6,7,3,4];

// Sum of elements of array
// We use reduce(). It returns a single value
// var sum = arr.reduce((num1,num2) => num1+num2);
// console.log(sum);



// Highest element
// var highest = arr.reduce((num1,num2) => num1 > num2?num1:num2);
// console.log(highest);



// Smallest element
// var lowest = arr.reduce((num1,num2) => num1 < num2?num1:num2);
// console.log(lowest);



var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]


// find costly product in products
var costly = products.reduce((item1,item2) => item1.mrp > item2.mrp?item1:item2);
console.log(costly);



// Lowest cost product
var lowest_cost = products.reduce((item1,item2) => item1.mrp < item2.mrp?item1:item2);
console.log(lowest_cost);



//********* */ Add function using arrow function for n numbers
// let add=(...args) => args.reduce((num1,num2) => num1 + num2);
// console.log(add(10,20,30,40,50));



var product_details = products.find(item => item.name == "carrot");
console.log(product_details);



// some()-To check true or false
// To check if there is an item betwwen 30 and 50 rs price
var is_available = products.some(item => item.mrp > 30 && item.mrp < 50)
console.log(is_available);