//      *                      5 space
//     * *                     4 space       
//    * * *                    3 space
//   * * * *                   2 space
//  * * * * *                  1 space

for(let row=1; row<=5; row++){    //row=1
    let str="";
    for(let space=5-row; space>=1; space--){    //space=4,3,2,1
        str+=" ";
    }
    for(let star=1; star<=row; star++){     //star=1
        str+="* ";
    }
    console.log(str);
}