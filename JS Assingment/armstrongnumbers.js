for (let i = 100; i < 1000; i++) {
    let num = i;
    let sum = 0;
    while (num != 0) {
        let j = num % 10;
        sum += j**3;
        num = Math.floor(num/10);    
    }
    if (sum == i){
        console.log(i);
    }
}