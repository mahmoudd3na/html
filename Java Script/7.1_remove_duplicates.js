const array= [3,4,4,3,6,3,8,8,8,9,7,6,5,5,-1,-1]; 
function removeDuplicates(arr){ 
    const newArr=[];
    let duplicate;
    for(let i=0;i<arr.length;i++){ 
        duplicate =false; 
        for(let o=0;o<newArr.length;o++){ //thats a counter for the index of the new array 
            if(newArr[o]===arr[i])
                duplicate=true; 
        }
        if (duplicate!==true)
            newArr.push(arr[i]);
    }
    return newArr; 
}
console.log(removeDuplicates(array)); 