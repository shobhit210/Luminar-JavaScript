//Linear search

var arr=[10,11,12,13,14];
var element=14;
var flag =0;

for(let num of arr){
    if (num == element){
        flag++;
        break;
    }
}
if (flag == 0) {
    console.log(`Element not found`);
} else {
    console.log(`Element found`);
}