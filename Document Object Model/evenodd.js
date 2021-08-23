function evenodd(){
    var num = document.querySelector("#numb").value;
    if(num % 2 == 0){
        document.querySelector("#result").innerHTML=`<p style = "color:green">Entered number is even</p>`;
    } else {
        document.querySelector("#result").innerHTML=`<p style = "color:blue">Entered number is odd</p>`;
    }
}