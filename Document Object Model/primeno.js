function checkPrimeNumber() {
    var num1 = document.querySelector("#no1").value;
    var num2 = document.querySelector("#no2").value;
    var primenos = "";
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            let flag = 0;
            for (let j = 2; j < num1; j++) {
                if (i % j == 0) {
                    flag++;
                    break;
                }
            }
            if (flag == 0) {
                primenos += i + " ";
            }

        }
    } else {
        for (let i = num2; i <= num1; i++) {
            let flag = 0;
            for (let j = 2; j < num2; j++) {
                if (i % j == 0) {
                    flag++;
                    break;
                }
            }
            if (flag == 0) {
                primenos += i + " ";
            }

        }
    }
    document.querySelector("#result").innerHTML = "Prime Numbers are: " + primenos;
}