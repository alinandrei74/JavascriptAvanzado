// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  // ...
  let salary; // Almacena las variables de las tipologías de los trabajos
  // Switch permite almacenar condicionales relacionados con la función que lo contiene
  switch (role) {
    case 'ceo' : // en el caso de que el role sea ceo, en el resto es iguak
      salary = 2200;
      break;
    case 'manager': //cto y manager comparten el mismo sueldo, así que van en el mismo bloque
    case 'cto':
      salary = 1800;
    case 'developer':
      salary = 1500;
      break;
    default: // default sirve para manejar excepciones, en caso de que el valor introducido con coincida con nincuno de los previstos en el resto del código
    salary = 1000;
    break;
  }
return salary; // devuelve el valor de la variable salary

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);