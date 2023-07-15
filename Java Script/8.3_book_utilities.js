const book1={name :"who controls the world", autor:"noam chomsky", year:2002} 
const book2={name :"the subtle art of not giving a fuck", autor:"mark manson", year:2018} 

const bookUtils={}; 
bookUtils.getFirstPublished=function(book1,book2){ 
    if (book1.year < book2.year)
    return book1; 
    else return book2; 
}

bookUtils.setNewEdition=function(book,lastYear){
    book.lastEdition=lastYear;
}
bookUtils.setNewEdition(book1,2029); 
bookUtils.setNewEdition(book1,2030); 

bookUtils.setLanguage=function(book,language){ 
    book.language=language; 
}
bookUtils.setLanguage(book2,"french"); 
bookUtils.setTranslation=function(book,translatorName,languageName){ 
    book.translation={translator:translatorName, language:languageName}
}
bookUtils.setTranslation(book1,"qasem","sudanese"); 
console.log(book1.translation);
bookUtils.setPublisher=function(book,name, location){ 
    book.publisher={publisherName:name,publisherLocation:location}
}
bookUtils.isSamePublisher=function(book1,book2){
    if(book1.publisher.publisherName==book2.publisher.publisherName){
     if(book1.publisher.publisherLocation==book2.publisher.publisherLocation)
       return true;
       else return false; 
    } 
    else return false; 
}
bookUtils.setPublisher(book1,"loay","hebron")
bookUtils.setPublisher(book2,"loay","hebron")
console.log(bookUtils.isSamePublisher(book1,book2)); 
// console.log(bookUtils.getFirstPublished(book1,book2)); 


