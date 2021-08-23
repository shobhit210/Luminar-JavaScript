// Binary Search 3

var arr = [1,8,5,2,7,56,22,11,75,89,62];
arr.sort((num1,num2)=>num1-num2);
console.log("Sorted array is", arr);

var element = 62;
var low = 0;
var upp = arr.length - 1;
var flag = 0;

while(low<upp){
    let mid=Math.floor((low+upp)/2);
    if (element < arr[mid]) {
        upp = mid - 1;
    } else if (element > arr[mid]){
        low = mid + 1;
    } else if (element == arr[mid]){
        flag++;
        break;
    }
}

if (flag == 0) {
    console.log(`Element not found`);
} else {
    console.log(`Element found`);
}