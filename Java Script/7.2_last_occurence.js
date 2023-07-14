const string = "The more you know, the more you know that you don't know";

function lastOccurrence(text) {
  let index = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "k" && text[i + 1] == "n" && text[i + 2] == "o" && text[i + 3] == "w") {
      index =i;
    }
  }
  return index; 
}
console.log(lastOccurrence(string));
