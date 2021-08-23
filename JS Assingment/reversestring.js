let  str1 = "Hello world";
let revstr = "";
for(let i = str1.length-1 ; i >= 0 ; i--){
    revstr += str1[i];
}
console.log(revstr);