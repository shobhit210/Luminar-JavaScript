var temperature=[
    {district:"tvm",temprature:25},
    {district:"kollam",temprature:27},
    {district:"kottayam",temprature:24},
    {district:"ekm",temprature:27},
    {district:"tsr",temprature:25},
    {district:"pkd",temprature:30},
    {district:"tvm",temprature:27},
    {district:"kollam",temprature:25},
    {district:"kottayam",temprature:28},
    {district:"ekm",temprature:29},
    {district:"tsr",temprature:32},
    {district:"pkd",temprature:31},

];

var weather = {};

for(let data of temperature){
    let dist=data["district"];
    let temp=data["temperature"];
    if(dist in weather){
        let old_temp=weather[dist];
        if(old_temp < temp){
            weather[dist] = temp;
        } else {
            weather[dist] = old_temp;
        }
    } else {
        weather[dist]=temp;
    }
}
console.log(weather);



// Sorting
function districtSort(data){
    return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1]);  //Converting weather from object to array
    //[[tvm,27],[kollam,27],[kottayam,28],...] similar array is created. We get two arrays list1 & list2 here.
}

console.log(districtSort(weather));



// Steps to print district name and maximum temperature value:
// 1.Declare an empty object weather = {}
// 2.Run for loop in given temperature Array.
// 3.Take two variables dist and temp inside for loop. Assign district name to dist and temperature value to temp variable for each cycle of for loop.
// 4.Check if the dist value is present in weather object array.
// 5.Initially when it is not present push the district name and temperature value into weather object using dist and temp.
// 6.If the dist value is present in the weather array then:
//     A.Declare old_temp variable ???