function createBook(){
    let book_name = bookname.value;
    let author_name = author.value;
    let book_price = price.value;
    let no_of_copies = copies.value;

    let book = {
        bookName: book_name,
        authorName: author_name,
        bookPrice: book_price,
        noOfCopies: no_of_copies
    }

    localStorage.setItem(book.bookName,JSON.stringify(book));
    alert("Book added to local storage");
    location.reload(true);
}