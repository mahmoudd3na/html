const book1={name : `"sapiens"`, year: 2013, author:"Yuval Noah Harrari"}

function bookInfo(book){ 
        return `The book ${book.name} was written by ${book.author} in
        the year ${book.year}.` ; 
}
console.log(bookInfo(book1)); 