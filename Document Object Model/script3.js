function checkAge(){
    var age = document.querySelector("#age").value;
    var res = "";
    if(age >= 18){
        res = `<p style = "background-color:seagreen; color:white; border:1px solid black"> You are eligible </p>`
    } else{
        res = `<p style = "background-color:red; color:white; border:1px solid black"> You are not eligible </p>`
    }
    document.querySelector("#result").innerHTML = res;
}