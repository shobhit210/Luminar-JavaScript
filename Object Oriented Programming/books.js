class bookLibrary{
    books = {
        "alchemist":{book_name:"alchemist",author:"rowling",price:2000,no_of_copies:100,sold:10},
        "delhi is not far":{book_name:"delhi is not far",author:"ruskin bond",price:1800,no_of_copies:200,sold:50},
        "as you like it":{book_name:"as you like it",author:"william shakesphere",price:1000,no_of_copies:500,sold:100},
        "the republic":{book_name:"the republic",author:"plato",price:500,no_of_copies:80,sold:20},
        "poetics":{book_name:"poetics",author:"aristotle",price:400,no_of_copies:600,sold:280},
    }

    findBook(book_name){
        if (book_name in this.books){
            console.log("Book found");
        } else {
            console.log("book not found");
        }
    }
}


var book1 = new bookLibrary();
book1.findBook("asterick");