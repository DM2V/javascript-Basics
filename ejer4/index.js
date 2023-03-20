//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
let myName = "Marcelo";

//- Otra cadena de texto con tu Apellido
let lastname = "Malte";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = `${myName} ${lastname}`;
console.log(student);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let studentMayus = student.toUpperCase();
console.log(studentMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let studentMinus = student.toLowerCase();
console.log(studentMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let letters = student.length;
console.log(letters);

//- Una variable que contenga la primera letra del Nombre
let firstLetterName = myName.charAt(0);
console.log(firstLetterName);

//- Otra variable que contenga la última letra del Apellido
let lastLetterName = lastname.substring(lastname.length - 1, lastname.length);
console.log(lastLetterName);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let deleteSpace = student.replace(/ /g, "")
console.log(deleteSpace);

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let searchWord = student.includes("Marcelo");
console.log(searchWord);
