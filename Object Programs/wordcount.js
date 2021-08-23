// To know the word count
var text="hello hai hello hai are";
// count is hello:2 hai:2 are:1

var words=text.split(" "); //we get an array of string here in words[hello,hai,hello,hai,are]
// To split a string/sentence based on , use text.split(",").
var dict={};

for(let word of words){
    if (word in dict){
        dict[word] += 1;
    } else {
        dict[word] = 1;
    }
}
console.log(dict);