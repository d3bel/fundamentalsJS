function bookShelf(array) {
  let shelves = {};
  array.forEach((genreShelf) => {
    if (genreShelf.includes("->")) {
      let [shelf, genre] = genreShelf.split(" -> ");
      if (!shelves.hasOwnProperty(shelf)) {
        shelves[shelf] = { genre: genre, book: [] };
      }
    } else {
      let [bookTitle, bookAuthorAndGenre] = genreShelf.split(": ");
      let [bookAuthor, bookGenre] = bookAuthorAndGenre.split(", ");
      let book = { bookTitle: bookTitle, bookAuthor: bookAuthor };
      for (let eachShelf in shelves) {
        if (shelves[eachShelf].genre === bookGenre) {
          shelves[eachShelf].book.push(book);
        }
      }
    }
  });
  let sortByBookCount = Object.entries(shelves).sort(
    (a, b) => b[1].book.length - a[1].book.length
  );
  for (let [shelfID, shelfGenre] of sortByBookCount) {
    console.log(`${shelfID} ${shelfGenre.genre}: ${shelfGenre.book.length}`);
    let sortByBookName = shelfGenre.book.sort((a, b) =>
      a.bookTitle.localeCompare(b.bookTitle)
    );
    sortByBookName.forEach((book) => {
      console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
    });
  }
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
