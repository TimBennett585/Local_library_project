function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
    const borrowed = books.filter((book) => book.borrows[0].returned === false);
    const returned = books.filter((book) => book.borrows[0].returned === true);
    console.log(borrowed);
  const sortedBooks = [];
    sortedBooks.push(borrowed);
    sortedBooks.push(returned);
  return sortedBooks;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
    const borrowers = borrows.map((transaction) => {
      const { id, returned } = transaction;
      const account = accounts.find((acc) => acc.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
