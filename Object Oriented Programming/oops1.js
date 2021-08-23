// Set roll No, name, course, total

class student{
    setStudent(roll,nme,crse,total){  //setStudent initializing instance variables setStudent can be anything like setStud or setstu
        this.rollno=roll;     //this.rollno is an instance variable. this is a keyword used to point current class instance variables.
        this.name=nme;        //this.propertyname to be added to the object
        this.course=crse;
        this.marks=total;
    }
    printStudent(){
        console.log(this.rollno,this.name,this.course,this.marks);
    }
}

var obj = new Student()
obj.setStudent(25,"shobhit","MEAN",500);
obj.printStudent();


// Constrructor initialises instance variables
// in javascript constructor name always constructor()


class student{
    constructor(roll,nme,crse,total){  //setStudent initializing instance variables setStudent can be anything like setStud or setstu
        this.rollno=roll;     //this.rollno is an instance variable. this is a keyword used to point current class instance variables.
        this.name=nme;        //this.propertyname to be added to the object
        this.course=crse;
        this.marks=total;
    }
    printStudent(){
        console.log(this.rollno,this.name,this.course,this.marks);
    }
}


var obj = obj.setStudent(25,"shobhit","MEAN",500);
obj.printStudent();