var pattern = "ABAABBAC";
var dict={};
for(let alph of pattern){
    if(alph in dict){
        console.log("Recursive character",alph);
    } else {
        dict[alph]=1;
    }
}
console.log(dict);