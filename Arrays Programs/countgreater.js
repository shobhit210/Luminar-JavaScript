// Count the months greater than 25000

var expenses=[30000, 25000, 27000, 25000, 25000, 25000];
var months = 0;
for(let amt of expenses){
    if (amt>25000) {
        months++;
    }
}
console.log(months);