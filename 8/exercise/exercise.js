function multiplyByTwo(value) {
  let number = 2;
  // función dentro de la función que devuelve una multiplicación * 2, que se saca de la variable declarada
  function inner() {
    return value * number;
  }
  return inner;
}


console.log(multiplyByTwo(4)());