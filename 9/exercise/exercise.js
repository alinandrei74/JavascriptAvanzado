const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

const keys = Object.keys(person);

// Itera sobre las claves e imprime los pares

keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});