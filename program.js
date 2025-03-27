let library = [];
function createLibrary(title, author){
    
    let obj = {};
    obj.title = title;
    obj.author = author;
   
    return obj;
}

function addBook(){
    library.push({title: this.title, author: this.author})
}

function removeBook(title){
    let index = library.findIndex((ele)=> ele.title ==title)
    library.splice(index,1);
}

function detailsOfBooks(){
    library.forEach((ele)=> console.log(ele))
}

let book1 = createLibrary("Wings of Fire", "A.P.J Abdul Kalam");
let book2 = createLibrary("Fly, Shoot, Dive", "Rachana Rawat");
let book3 = createLibrary("The Kite Runner","Khalid Hussain");

addBook.call(book1);
addBook.call(book2);
addBook.call(book3);

removeBook("The Kite Runner");

detailsOfBooks();
