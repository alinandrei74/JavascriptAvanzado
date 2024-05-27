function sumUntil(maxValue) {
  // apertura de variable para introducir números

  let sum = 0;
  // para cada elemento de i sea i igual a uno, mientras el elemento i sea menor que el número introducido
  for (let i = 1; i <= maxValue; i++) {
    sum += i; // añade uno a la suma
  }
// devolver la variable sum
  return sum;

}

console.log(sumUntil(7));