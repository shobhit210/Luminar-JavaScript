// H.W.
// Array Structure = [srno, product, price, stock-left]

var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
    
]


// print number of product in this shop  7
// var num = 0;
// for(let prod of products){
//     num++;
// }
// console.log(`Total number of products in the shop is ${num}`);



// print number of product in stock 6
// for(let stock of products){
//     if(stock[3]!=0){
//         console.log(stock);
//     }
// }



// print costly product
// var highest = 0;
// for(let cost of products){
//     for(let price of products){
//         if(cost[2]>price[2])
//         highest = cost;
//     }
// }
// console.log("Highest price is of",highest);



// print losw_cost product
var lowest = 0;
for(let cost of products){
    for(let price of products){
        if(cost[2]<price[2])
        lowest = cost;
    }
}
console.log("Lowest price is of",lowest);



// is there any item available under rs 10 ? true
// var flag = 0;
// for(let mrp of products){
    // if(mrp[2]<=10){
        // console.log(mrp);
        // flag++;
    // }
// }
// if (flag!=0){
    // console.log(true);
// } else {
    // console.log(false);
// }



// print deatils of boost.
// console.log(products[6]);