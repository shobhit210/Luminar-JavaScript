var accounts = {
    1000: { acno: 1000, ac_type: "savings", balance: 5000 },
    1001: { acno: 1001, ac_type: "savings", balance: 6000 },
    1002: { acno: 1002, ac_type: "credit", balance: 3000 }
}

// // print balance of 1000
// console.log(accounts[1000]["balance"]);

// // print acno of 1001
// console.log(accounts[1001]["acno"]);

// // print ac_type of 1002
// console.log(accounts[1002]["ac_type"]);

// // Print full details of 1001
// console.log(accounts[1001]);

// // To add 1003:{acno:1003,ac_type:"savings",balance:3000}
// accounts[1003] = {acno:1003, ac_type:"savings", balance:3000};
// console.log(accounts);



// *********************************************************************************************************************
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
            { date: "01/06/2021", from: 1002, amount: 2000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 4000 }]
    }

}


// Get object of 1002
// console.log(accounts1[1002]);


// Get c-transactions of 1001
// let transactions = accounts1[1001]["c_transactions"];
// console.log(transactions);
// OR
// console.log(accounts1[1001]["c_transactions"]);


// Print all transactions of 1001 with amount > 500
// var trans = accounts1[1001]["c_transactions"].filter(num => num.amount > 500);
// console.log(trans);


// Print all transactions of 1002 greater than 1000
// console.log(accounts1[1002]["c_transactions"].filter(num => num.amount > 1000));


// Print total of all credits of 1001
// var cred = accounts1[1001]["c_transactions"].reduce((num1,num2) => num1["amount"] + num2["amount"]);
// console.log(cred);  //This returns NaN

// var total = accounts1[1001]["c_transactions"].map(amt => amt["amount"]).reduce((numb1,numb2) => numb1 + numb2);
// console.log(total);


// Print total of all credits of 1002
// console.log(accounts1[1002]["c_transactions"].map(num1 => num1["amount"]).reduce((numbr1,numbr2) => numbr1 + numbr2));


// Find lowest transaction amount in 1002
let low = accounts1[1002]["c_transactions"].reduce((num1,num2) => num1.amount<num2.amount?num1:num2);
console.log(low);

let lowest = accounts1[1002]["c_transactions"].map(num => num.amount).reduce((num1,num2) => num1<num2?num1:num2);
console.log(lowest);