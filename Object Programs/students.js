var product = {
    itemcode:1000,
    mrp:30000,
    name:"f14",
    instock:15
}

// item price
console.log(product["mrp"]);

// item name
console.log(product["name"]);

// update 2000 rs offer
product["mrp"]-=2000;
console.log(product);


// chk for offer is present if not add offer:20% 
if(!("offer" in product)){
    product["offer"]="25%";
}
console.log(product);


//Updating in_stock elements to 25 
product["instock"]=25;
console.log(product);