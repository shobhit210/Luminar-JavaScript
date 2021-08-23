// print prime nos from 21 to 40

var low=21;
var upp=40;

for (let i = low; i < upp; i++) {
    let flag = 0;
    for ( let j = 2; j < low; j++) {
        if (i%j==0) {
            flag++;
            break; // breaks out of current for-loop only
        }
    }
    if (flag==0){
        console.log(i);
    }
    
}