let person ={age:15, name:"mahmoud",hobbies:"football"}

function swap(object){
    const newObject={}; 
    let prop=Object.keys(object); 
    for(let i=0;i<prop.length;i++){
        newObject[object[prop[i]]]=prop[i];
    }
    return newObject; 
}

console.log(swap(person)); 


