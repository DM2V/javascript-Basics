//- factorial-break.js
//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

function factorial(num) {
  let result = 1;
  let i = num;
  while (i > 0) {
    result *= i;
    i--;
    if (i === 1) {
      break;
    }
  }
  return result;
}

console.log(factorial(10));
