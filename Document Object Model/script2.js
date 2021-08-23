function checkAge() {
    var age = document.querySelector("#age").value;
    // let html_data = age>18?"Eligible":"Not Eligible";
    // document.querySelector("#result").innerHTML = html_data
    let html_data = "";
    if (age >= 18){
        html_data = `<p style = "background-color:seagreen;">Eligible</p>`;
    } else {
        html_data = `<p style = "background-color:red;">Not Eligible</p>`;
    }
    result.innerHTML = html_data;
}