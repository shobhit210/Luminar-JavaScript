// Counting the different words

var sent = "hello come there hello go here hi know go come there hi here";
var dict = {};
var arr = sent.split(" ");
for(let word of arr){
    if (word in dict) {
        dict[word] += 1;
    } else {
        dict[word] = 1;
    }
}
console.log(dict);



// Steps:
// 1.Split the string into an array of words.
// 2.Take an empty object dict={}
// 3.Run for loop in that array of words.
// 4.If the word is present in dict then increment its value by 1.
// 5.If the word is absent in dict then push that word into dict with value 1.