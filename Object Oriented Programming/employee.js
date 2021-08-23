class employee{
    constructor(id,name,design,salary,exp){
        this.employeeid = id;
        this.employeename = name;
        this.employeedesignation = design;
        this.employeesalary = salary;
        this.employeeexperience = exp;
    }

    designation(des){
        if (des in emp1){
            console.log(emp1);
        } else if (des in emp2){
            console.log(emp2);
        } else if (des in emp3){
            console.log(emp3);
        } else if (des in emp4){
            console.log(emp4);
        } else if (des in emp5){
            console.log(emp5);
        } else {
            console.log("designation not present");
        }
    }

}

var emp1 = new employee(11,"shobhit","analyst",50000,5);
var emp2 = new employee(12,"sakshi","intern",30000,1);
var emp3 = new employee(13,"tejas","associate",20000,2);
var emp4 = new employee(14,"vipul","ase",35000,3);
var emp5 = new employee(15,"gargi","qa",40000,2);
// First push these objects into an array

employees =[];
employees.push()