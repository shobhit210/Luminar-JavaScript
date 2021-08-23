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


// 1.map()
// Print all product names
var item_names = products.map(item => item.name);
console.log(item_names);



// Print all product names in caps
var prod_names = products.map(item => item.name.toUpperCase());
console.log(prod_names);



// Print all product code
var prod_codes = products.map(numb => numb.code)
console.log(prod_codes);



// *****************************************************************************************************
// 2.filter()
