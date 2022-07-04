function movies(input) {
  let movies = [];

  input.forEach((film) => {
    if (film.includes("addMovie ")) {
      let movie = film.replace("addMovie ", "");
      movies.push({ name: movie });
    } else if (film.includes("directedBy")) {
      let [name, director] = film.split(" directedBy ");
      movies.forEach((film) => {
        if (film.name === name) {
          film.director = director;
        }
      });
    } else if (film.includes("onDate")) {
      let [name, date] = film.split(" onDate ");
      movies.forEach((film) => {
        if (film.name === name) {
          film.date = date;
        }
      });
    }
  });
  movies.forEach((film) => {
    if (film.name && film.director && film.date) {
      console.log(JSON.stringify(film));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
