// Binary Search 2

var arr = [2,5,8,7,98,45,21,11,46];
// arr.sort((num1,num2)=>num1<num2?-1:1);
arr.sort((num1,num2)=>num1-num2);  //For Sorting the array
console.log(arr);

var low = 0;
var upp = arr.length-1;
var element = 44; //Element to be searched
var flag = 0;

// low, up and mid are index locations and not the array elements

while (low < upp){
    var mid = Math.floor((low+upp)/2);
    if (element < arr[mid]){
        upp = mid - 1;
    } else if (element > arr[mid]){
        low = mid + 1;
    } else if (element == arr[mid]){
        flag++;
        break;
    }
}

if (flag != 0) {
    console.log(`Element found at ${mid+1} position`);
} else {
    console.log(`Element not found`);
}