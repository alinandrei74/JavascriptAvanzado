function nicknameMap(persons) { 
    let nicknames = []; //aquí se guardan los elementos del diccionario persons
    for (let i = 0; i < persons.length; i++) { //por cada elemento en i, si i es menor que la longitud de persons, añadir uno
      let nickname = `${persons[i].name}-${persons[i].age}`; //declara la variable nickname como la concatenación del nombre y la edad
      nicknames.push(nickname); //la variable nicknames es un push de elementos de nickname
}
    return nicknames; //devuelve los elementos de nicknames
}

const persons = [ 
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);