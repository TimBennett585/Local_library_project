function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
return found;
}

function sortAccountsByLastName(accounts) {
 const sortedAccounts = accounts.sort((A,B) => (A.name.last > B.name.last ? 1 : -1));
 return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
    const totalCount = books.reduce((count, book) =>{
      const borrows = book.borrows;
      const accountBorrowed = borrows.some(borrow => borrow.id === accountId);
        if (accountBorrowed) {
          return count + 1;
        }
        return count;
    }, 0);
    return totalCount;
} 

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
    const checkedOutBooks = books.filter((book) => {
      const borrows = book.borrows;
      const isBorrowed = borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
    return isBorrowed;
    });
  const booksWithAuthors = checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
  return {
    ...book,
    author,
  };
  });
  return booksWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
