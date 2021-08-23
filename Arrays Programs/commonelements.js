// Common elements in both arrays

var arr1 = [10,20,30,40];
var arr2 = [10,11,12,20];

for(let num1 of arr1){
    for(let num2 of arr2){
        if (num2 == num1) {
            console.log(num1);
        }
    }
}