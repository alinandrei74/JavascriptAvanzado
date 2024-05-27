const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "elPepe";

// Modify the property `firstName` of the `person2` in "Simon".

//Esta modificación se produce porque en javascript si se altera el 
//valor en memoria de una variable se afecta ambién al valor en memoria de las variables a las que apuntan


console.log(person1);
console.log(person2);
