const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCount(array) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    for (let ii = 0; ii < array[i].length; ii++) {
        let char=array[i][ii].toLowerCase(); 
        if ( count[char] > 0) {
          count[char]++;
        } else count[char] = 1;
      }
    }
  return count;
}

console.log(letterCount(array));
//create the object of the letters
//loop over the whole array
//loop over every element
//now check if the letter is there
//if not make a new letter
//if yes increase the count of the letter
