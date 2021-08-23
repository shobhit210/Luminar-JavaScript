var pattern = "ABAC";
var dict={};
for(let char of pattern){
    if(char in dict){
        console.log("First Recursive Character",char);
        break;
    } else {
        dict[char]=1;
    }
}
console.log(dict);