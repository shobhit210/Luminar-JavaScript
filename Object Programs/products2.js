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



// Get code and name of products
//Using for loop
// for(let items of products){
//     console.log(items["code"] + "---" + items["name"]);
// }

// Using map() and arrow function
// var product_name = products.map(item => item["name"]);
// var product_code = products.map(item =>item["code"]);
// console.log(product_name);
// console.log(product_code);



// Print all product names in UPPERCASE
// var items = products.map(item => item.name.toUpperCase());
// console.log(items);



// Print all products whose MRP is below 50
// var mrp = products.filter(item => item["mrp"] < 50);
// console.log(mrp);



// Print all products whose MRP is above 50
// var price = products.filter(item => item.mrp > 50);
// console.log(price);



// Print all products whose price falls between 50 to 100
// var cost = products.filter(item => item.mrp >= 50 && item.mrp < 100)
// console.log(cost);



// Print all items available in stock
// var stock = products.filter(item => item.aval_qty != 0);
// console.log(stock);



// Out of stock items
// var outOfStock = products.filter(items => items.aval_qty ==0);
// console.log(outOfStock);



// All items whose stock is below 10
// var stock10 = products.filter(item => item.aval_qty < 10);
// console.log(stock10);



// Print products whose name starts with b
// var name_b = products.filter(item => item.name[0]=="b");
// console.log(name_b);



// Print all products whose name starts with c
// var name_c = products.filter(item => item.name[0]=="c");
// console.log(name_c);



// Print all products whose name starts with b and c
// var name_b_c = products.filter(item => item.name[0]=="b" || item.name[0]=="c");
// console.log(name_b_c);



// H.W If mrp > 50 offer of 5%, if mrp < 50 then 0% offer
var offer = products.filter(item => item.mrp > 50?item["offer"]="5%":item["offer"]="0%");
console.log(offer);

//**************************************************************************************************//


// Filter()
// Print all even numbers only
// var arr = [1,5,6,7,3,4];
// var even = arr.filter(item => item % 2 == 0);
// console.log(even);



// Print all odd numbers only
// var odd = arr.filter(item => item % 2 != 0);
// console.log(odd);



// Print numbers greater than 5
// var numb = arr.filter(item => item >= 5);
// console.log(numb);



// Print number less than 5
// var nums = arr.filter(item => item < 5);
// console.log(nums);