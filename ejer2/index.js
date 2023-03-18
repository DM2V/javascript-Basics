/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

list = [
  (nombre = "Marcelo"),
  (edad = 23),
  (desarrollador = true),
  (fechaNacimiento = new Date(1999, 11, 03)),
  (libroFavorito = {
    titulo: "Prodigal Heart",
    autor: "Christine D'Clario",
    fecha: new Date(2017, 09, 05),
    url: "https://www.amazon.com/s?k=9781629994499&i=stripbooks&linkCode=qs",
  }),
];