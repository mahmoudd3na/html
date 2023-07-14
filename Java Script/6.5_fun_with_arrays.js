const arrayOfObjects =[]; 
for(let i=0; i<100;i++)
    arrayOfObjects[i]=0 ; 

arrayOfObjects.fill({name:"mahmoud"}); 
let count=0; 
// let newArray= Array.from(arrayOfObjects,one => { 
//     one=count;   
//     count++; 
// });
// let obj=""; 
const arr4= Array.from("dfdf"); 
// for(let i=0;i<arr4.length; i++){ 
//     obj+=arr4[i]; 
// }
let obj = {...arr4}; 

let isItArray= Array.isArray(arr4); 
const arr6=[4,7,6,4]; 
const deepcopy =arr6; 
deepcopy[3]= 5; 
const shallowcopy=[...arr6];
shallowcopy[3]= 8; 

console.log(shallowcopy); 