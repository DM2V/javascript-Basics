//- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(10));
