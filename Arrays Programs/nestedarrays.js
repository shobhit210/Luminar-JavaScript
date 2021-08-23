// Nested Arrays

var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2]
]

// Employee names
// for (let employee of employees){    //employee is variable, employees is array
    // console.log(employee[1]);   //Printing only names of employees which is in first position in inside array
// }

// Employee details whose designation is developer
// for(let emp of employees){
    // if(emp[2]=="developer"){
        // console.log(emp);
    // }
// }


// Print employee details whose salary is less than 22000
for(let num of employees){
    if (num[3]<22000){
        console.log(num);
    }
}