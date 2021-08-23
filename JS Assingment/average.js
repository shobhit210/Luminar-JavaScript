// To calculate average marks of a student and assign grades accordingly

var m1 = 79, m2 = 80, m3 = 72, m4 = 88, m5 = 64;
let sum = m1 + m2 + m3 + m4 +m5;
let average = sum / 5;
console.log(`The average mark of the student is ${average}`);

(average>90)?console.log(`The student scored A+ grade`): (average>80 && average<90)?console.log(`The student scored A grade`) : (average>70 && average<80)?console.log(`The student scored B+ grade`) : (average>60 && average<70)?console.log(`The student scored B grade`) : (average>50 && average<60)?console.log(`The student scored C+ grade`) : (average>40 && average<50)?console.log(`The student scored C grade`) : console.log(`Student failed`);