const people = ["Greg", "Mary", "James","Devon"];
// people.map(name => {console.log(name)}) 
people.shift(); 
people.pop(); 
people.unshift("matt"); 
people.push("Mahmoud"); 


// for(let i=0; i<people.length; i++){
    //     if(people[i]==="Mary"){ 
        //         console.log(people[i]);
        //         return people[i]; 
        //     }
// }
let sliceArray= people.slice(2,4); 
console.log(people.indexOf("Mary")); 
console.log(people.indexOf("foo"));
people.splice(0,1,"Greg"); 
people.splice(2,1,"Elizabeth"); 
people.push("james") ;
const withBob = people.concat("Bob"); 




console.log(withBob);