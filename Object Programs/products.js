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

// Map() - Used only when no conditions are specified
// Get only names of products

// var product_names=products.map(item=>item.name);
// console.log(product_names);



// Print all product name in upper case

// var p_names=products.map(item=>item.name.toUpperCase());
// console.log(p_names);



// Filter() - Used when some conditions are specified
// Find even numbers

var arr = [1,5,6,7,3,4];
var evens=arr.filter(num=>num%2==0)
console.log(evens);




// Print all products whose mrp below 50
// var below_fifty=products.filter(item=>item.mrp < 50);
// console.log(below_fifty);




// Print out of stock items
// var out_of_stock=products.filter(item=>item.aval_qty==0);
// console.log(out_of_stock);



// Print all items whose stock is less than 10
// var stock_b_10=products.filter(item=>item.aval_qty<10);
// console.log(stock_b_10);



// Print products in range of 50 to 100 price
// var mid = products.filter(item=>item.mrp > 50 && item.mrp < 100);
// console.log(mid);



// Print products whose name starts with B
// var b_name = products.filter(item=>item.name[0]=="b");
// console.log(b_name);



// H.W If mrp > 50 offer of 5%, if mrp < 50 then 0% offer
var offer = products.filter(item => item.mrp > 50?item["offer"]="5%":item["offer"]="0%");
console.log(offer);