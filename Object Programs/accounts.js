var accounts = {
    1000: { acno: 1000, ac_type: "savings", balance: 5000 },
    1001: { acno: 1001, ac_type: "savings", balance: 6000 },
    1002: { acno: 1002, ac_type: "credit", balance: 3000 }

}


// // balance of 1000
// console.log(accounts[1000]["balance"]);


// // To add 1003:{acno:1003,ac_type:"savings",balance:3000}
// accounts[1003] = { acno: 1003, ac_type: "savings", balance: 3000 };
// console.log(accounts);



var accounts1 = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}



// Browse credit transactions of 1002
// console.log(accounts1[1002]["c_transactions"]);


// print all credit transactions of 1000 whose amount > 500
// accounts1[1000]["c_transactions"].
// filter(transaction => transaction.amount>500).
// forEach(transaction =>console.log(transaction));



// Print total of all credits of 1000
// var total_credit=accounts1[1000]["c_transactions"].reduce((tran1,tran2) => tran1["amount"] + tran2["amount"]);
// console.log(total_credit); 
// Not Working - NaN

// var total = accounts1[1000]["c_transactions"].map(transaction => transaction.amount).reduce((amt1,amt2)=>amt1+amt2);
// console.log(total); 
// Working



// Lowest amount in credit trasactions
var lowest = accounts1[1000]["c_transactions"].reduce((numb1,numb2)=>numb1.amount<numb2.amount?numb1:numb2);
console.log(lowest); 
//Not Working

// var low = accounts1[1000]["c_transactions"].map(transaction => transaction.amount).reduce((amt1,amt2)=> amt1<amt2?amt1:amt2);
// console.log(low); 
//Working



// // Credit transactions date of 1000
// var date = accounts1[1000]["c_transactions"].map(transaction => transaction.date);
// console.log(date);

// // OR

// accounts1[1000]["c_transactions"].forEach(transaction => console.log(transaction.date));



// Print only first date of 1000
// console.log(accounts1[1000]["c_transactions"][0].date);