// Binary Search
var arr = [5,7,2,6,8,11,12];
arr.sort((num1,num2)=>num1-num2);


// var arr = [7,8,9,10,11,12];
var element = 11;
var low = 0;
var upp = arr.length - 1;
var flag = 0;

while (low < upp) {
    let mid = Math.floor((low + upp)/2);
    if (element > arr[mid]) {
        low = mid + 1;
    } else if (element < arr[mid]) {
        upp = mid - 1;
    } else if (element == arr[mid]) {
        flag++;
        break;
    }
}
if (flag == 0) {
    console.log(`Element not found`);
} else {
    console.log(`Element found`);
}