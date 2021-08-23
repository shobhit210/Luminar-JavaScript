// Calculating highest expense

var expenses=[30000, 25000, 27000, 25000, 25000, 25000];
var high_num = 0;
for(let amt of expenses){
    if(amt>high_num){
        high_num=amt;
    }
}
console.log(`Highest expense is ${high_num}`);