var expens = {jan:1000, feb:20000, march:25000, april:30000, may:35000, jan:50000};
// console.log(expens.march);
// console.log(expens["may"]);
// console.log(expens.jan); //For duplicate values, it takes the last one.


// Adding a new property:value
// june:40000

// To add one more value into the object (At last)
expens.june=40000;
console.log(expens);

// To change a particular value. Add 3000 to march value.
expens.march +=3000;
console.log(expens);

// search if a key is present in the object
console.log("july" in expens); //if present then it returns true else false. We use 'in' keyword for this.

// check if july is present in Array. if not then add july:25000 to object
if ("july" in expens) {

} else {
    expens.july=25000;         //or if (!(july in expenses)) { expens.july=25000; }
}
console.log(expens);