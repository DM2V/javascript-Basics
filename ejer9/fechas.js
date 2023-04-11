/*
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const today = new Date();

const myBirthday = new Date(1999, 11, 03);

const comparation = today.getTime() > myBirthday.getTime();

const myDay = myBirthday.getDay();
const myMonth = myBirthday.getMonth() + 1;
const myYear = myBirthday.getFullYear();
