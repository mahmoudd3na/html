const arrOfStrs = ["boo", "doooo", "hoo", "ro"]; 
function lengthOfStrings(arr){ 
    const arrLength=[]; 
    for(let i=0;i<arr.length;i++){
        arrLength[i]=arr[i].length; 
    }
    return arrLength; 
}
// another way without a function
// const arrLength =arr.map(string => { 
//     return string.length; 
// });
console.log(lengthOfStrings(arrOfStrs)); 
