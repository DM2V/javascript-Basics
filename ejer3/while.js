//- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

function factorial(num) {
  let result = 1;
  let i = num;
  while (i > 0) {
    result *= i;
    i--;
  }
  return result;
}

console.log(factorial(10));
