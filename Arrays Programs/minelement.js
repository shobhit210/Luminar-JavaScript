// Find minimum array value

var arr=[10,20,25,24,15,7,90,64];
var min = 100; // var min = arr[0]
for(let amt of arr){
    if (amt < min){
        min = amt;
    }
}
console.log(`Lowest value in the array is ${min}`);