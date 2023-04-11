/*
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const myData = {
  name: "Marcelo",
  lastname: "Maltez",
  age: 23,
  height: 1.65,
  isDeveloper: true,
};

const myAge = myData.age;

const arrayMeAndFriends = [
  {
    ...myData,
  },
  {
    name: "Juan",
    lastname: "Perez",
    age: 25,
    height: 1.75,
    isDeveloper: false,
  },
  {
    name: "Pedro",
    lastname: "Gomez",
    age: 30,
    height: 1.85,
    isDeveloper: true,
  },
];

const arrayFriendsAgeOrder = arrayMeAndFriends.sort((a, b) => b.age - a.age);
