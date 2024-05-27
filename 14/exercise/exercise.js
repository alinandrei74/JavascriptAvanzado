class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Get
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  // Set
  set firstName(value) {
    this._firstName = value;
  }

  set lastName(value) {
    this._lastName = value;
  }

  set age(value) {
    this._age = value;
  }

  
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);