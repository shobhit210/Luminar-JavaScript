//checking if squared number is in between the specified limits

var upp=26;
var low=8;
var num=2;
for (let i = 1; i < upp; i++) {
    let square=0;  //no need of this. directly write let square =i**num
    square=i**num;
    if (square>=low && square<=upp) {
        console.log(square);
    } 
    if (square > upp) {
        break;
    }
    
}