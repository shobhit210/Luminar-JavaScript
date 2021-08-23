// Sorting an Array

var arr = [2,37,5,8,38,6,4,11,15,28,14,50,35,22,31];
console.log("Unsorted Array is", arr);

arr.sort((num1,num2)=>num1>num2?-1:1);
console.log("Sorted Array in descending order is", arr);

arr.sort((num1,num2)=>num1<num2?-1:1);
console.log("Sorted Array in ascending order is", arr);