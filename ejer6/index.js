// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const shoppingList = ["Milk", "Eggs", "Bread", "Butter", "Cheese"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
shoppingList.push("Sunflower Oil");

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
shoppingList.pop("Sunflower Oil");

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favoriteMovies = [
  {
    title: "The Flash",
    director: "Greg Berlanti",
    date: new Date(2014, 10, 7),
  },
  {
    title: "Superman",
    director: "Richard Donner",
    date: new Date(1978, 12, 15),
  },
  {
    title: "Batman",
    director: "Tim Burton",
    date: new Date(1989, 6, 23),
  },
];

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const moviesAfter2010 = favoriteMovies.filter(
  (movies) => movies.date > new Date(2010, 0, 1)
);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = favoriteMovies.map((movies) => movies.director);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titles = favoriteMovies.map((movies) => movies.title);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directorsAndTitles = directors.concat(titles);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directorsAndTitlesProp = [...directors, ...titles];
