// Definoción de las funciones para las operaciones
// `((2 + 4) * (5 + 2) - 2) / 5`

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const log = value => console.log(value);

// Operaciones paso a paso

const results = divide( 
  subtract( 
    multiply(
      sum(2, 4), 
      sum(5, 2)
    ),
    2
  ),
  5
);

//Imprime por pantalla los resultados

log(results);
