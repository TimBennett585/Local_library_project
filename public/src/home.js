getTotalBooksCount = books => books.length;

getTotalAccountsCount = accounts => accounts.length;

function getBooksBorrowedCount(books) {
const checkedOutCount = books.reduce((count, book) => {
  const firstTransaction = book.borrows[0];
    if (!firstTransaction.returned) {
      return count + 1;
    }
    return count;
}, 0);
  return checkedOutCount;
}

function calculateGenreFrequency(books) {
  const genreFrequency = {};
    for (let book of books) {
      const { genre } = book;
        if (genreFrequency[genre]) {
          genreFrequency[genre]++;
        } else {
          genreFrequency[genre] = 1;
        }
    }
  return genreFrequency;
}

function getMostCommonGenres(books) {
  const genreFrequency = calculateGenreFrequency(books) ;
  const genreArray = Object.keys(genreFrequency).map((genre) => ({
    name: genre,
    count: genreFrequency[genre],
  }));
    genreArray.sort((a, b) => b.count - a.count);
  return genreArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrowCounts = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  borrowCounts.sort((a, b) => b.count - a.count);
return borrowCounts.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorBorrowCounts = authors.map((author) => {
    const authorBooks = books.filter((book) => book.authorId === author.id);
    const borrowCount = authorBooks.reduce((count, book) => count + book.borrows.length, 0);
  return {
    name: `${author.name.first} ${author.name.last}`,
    count: borrowCount,
  };
  });
  authorBorrowCounts.sort((a, b) => b.count - a.count);
return authorBorrowCounts.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
