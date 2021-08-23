
// Array Methods:

// 1   map() -     Used when there are no conditions specified. Here number of inputs will be equal to number of outputs. 
//                 "It requires 1 input parameter". It returns back "Array".

// 2   filter() -  Used when there are some conditions specified. Here number of inputs may not be equal to number 
//                 of outputs. It returns back an "Object".
//                 "It requires 1 input parameter".

// 3   reduce() -  It processes the array and makes it a single output. It always returns a "single value".
//                 "It requires 2 input parameters". It returns back a "single value".

// 4   find() -    It is used to search for an element in an array. It returns only a "single object" 
//                 whereas searching using filter will return all the ojects with that value present in the array.
//                 "It requires 1 input parameter". It returns back a "single object".
//                  If the value is not present in the array then it returns undefined.

// 5   some() -    It returns "true" or "false" value based on the condition.
//                 "It requires 1 input parameter". It returns back either TRUE or FALSE (Boolean Value).




//         Method Name                 Number of Parameters                    Return Type
// 1        map()                       1                                       Array
// 2        filter()                    1                                       Object
// 3        reduce()                    2                                       Single Value
// 4        find()                      1                                       Single Object
// 5        some()                      1                                       Boolean Value




var arr = [1,5,2,6,7,3,1,4,5,2,6,8];
// // 1.map()
// // Find square of elements
// var square = arr.map(item => item**2);
// console.log(square);



// // find cube of elements
// var cube = arr.map(item => item**3);
// console.log(cube);



// ******************************************************************************************
// // 2.filter()
// // Find numbers >=5 in array
// var greater5 = arr.filter(item => item >= 5?item:0);
// console.log(greater5);



// // Find numbers <=5 in array
// var less5 = arr.filter(item => item <= 5);
// console.log(less5);



// // Find only 5 values
// var five = arr.filter(item => item==5);
// console.log(five);



// // Find only even numbers
// var even = arr.filter(item => item%2 == 0);
// console.log(even);



// // Find only odd numbers
// var odd = arr.filter(item => item%2 != 0);
// console.log(odd);



// *****************************************************************************************
// 3.reduce()
// // sum of the array
// var sum = arr.reduce((num1,num2) => num1 + num2);
// console.log(sum);



// // product of array
// var prod = arr.reduce((num1,num2) => num1*num2);
// console.log(prod);



// // Highest element in an array
// var highest = arr.reduce((num1,num2) => num1>num2?num1:num2);
// console.log(highest);



// // Find the lowest element in the array
// var lowest = arr.reduce((num1,num2) => num1<num2?num1:num2);
// console.log(lowest);



// ****************************************************************************************
// 4.find()
// Find number 10
var elem = arr.find(num => num==10);
console.log(elem);



// Find number 5
var num5 = arr.find(num => num==5);
console.log(num5);



// Find number 1
var num1 = arr.find(num => num == 1);
console.log(num1);



// Find number 50
var num50 = arr.find(num => num == 50)
console.log(num50);



// ******************************************************************************
// 5.some()
// If 4 is there
var num4 = arr.some(item => item ==4);
console.log(num4);



// If 5 is there
var num6 = arr.some(num => num == 6);
console.log(num6);



// if 16 is there
var num16 = arr.some(num => num == 16);
console.log(num16);



// if 8 is present
var num8 = arr.some(numb => numb == 8);
console.log(num8);