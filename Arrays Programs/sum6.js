//checking if sum 0f any 2 elements is 6

var arr=[1,2,3,4,5];
for(let i=0 ; i < arr.length ; i++){
    for(let j=i+1 ; j < arr.length ; j++){
        if (arr[i] + arr[j] == 6) {
            console.log(`Sum of ${arr[i]} and ${arr[j]} is 6`);
        }
    }
}