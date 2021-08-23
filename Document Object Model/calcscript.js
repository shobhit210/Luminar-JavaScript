// displayNumber()
// function displayNumber(num){
//     document.getElementById("inpt").value += num;
// or
    // inpt.value += num;
// }

let displayNumber=(num)=>inpt.value += num;



// evaluateExpression()
// function evaluateExpression(){
//     let res = eval(inpt.value)
//     inpt.value = res;
// }

let evaluateExpression = () => inpt.value==""?inpt.value = 0:inpt.value = eval(inpt.value);



// clearBox()
// function clearBox(){
// inpt.value = "";
// }

let clearBox = () => inpt.value = "";




// removeNumber()
// function removeNumber(){
//     inpt.value = inpt.value.slice(0,-1)
// }

let removeNumber = () => inpt.value = inpt.value.slice(0,-1);