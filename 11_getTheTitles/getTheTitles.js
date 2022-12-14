const getTheTitles = function(books) {
    const sortedBooks = books.map(function(book) {
        return book.title
    })
    return sortedBooks
};

// Do not edit below this line
module.exports = getTheTitles;
